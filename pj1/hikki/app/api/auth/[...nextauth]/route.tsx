import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (user && user.password === credentials.password) {
          return { id: user.id, email: user.email, name: user.name };
        }

        throw new Error("Invalid credentials");
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    jwt: async ({ token, user }: any) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
    session: ({ session, token }: any) => {
      if (session.user) {
        session.user.id = token.uid;
      }
      return session;
    },
    redirect: async ({ url, baseUrl }) => {
      if (!url || !baseUrl) {
        console.error("Invalid URL or Base URL:", { url, baseUrl });
        return "/home"; // Fallback to home if URL is invalid
      }

      try {
        // Check if the URL is relative and construct a full URL if necessary
        if (url.startsWith("/")) {
          url = new URL(url, baseUrl).toString(); // Prepend base URL to relative URL
        }
        return url;
      } catch (e) {
        console.error("Failed to construct URL:", url);
        return "/home"; // Fallback to home on URL construction error
      }
    },
  },
});

export { handler as GET, handler as POST };
