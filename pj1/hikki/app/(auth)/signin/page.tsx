"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.ok) {
      // Redirect manually if needed
      window.location.href = "/home";
    } else {
      // Handle sign-in error
      console.log(result?.error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex align-middle gap-28">
          <div>
            <div className="text-5xl">Signin</div>
            <div className="m-10">
              {" "}
              New user ?
              <div>
                <Button onClick={() => router.push("/signup")}>Signup</Button>
              </div>
            </div>
          </div>
          <form onSubmit={handleSignIn}>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <Button type="submit">Sign In</Button>
          </form>
        </div>
      </div>
    </>
  );
}
