import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "" },
        password: { label: "Password", type: "password", placeholder: "" },
      },
      async authorize(credentials: any) {
        // Check if credentials exist
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        // Fetch user from database
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        // Check if user exists and passwords match (plain text comparison)
        if (user && user.password === credentials.password) {
          return { id: user.id, email: user.email, name: user.name };
        } else {
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
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
  },
  //   pages: {
  //     signIn: "/auth/signin", // Optional: specify custom sign-in page
  //   },
});

export { handler as GET, handler as POST };
