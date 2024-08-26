"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    });

    if (res.ok) {
      router.push("/api/auth/signin");
    } else {
      // Handle error
      console.log("Signup failed");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex align-middle gap-28">
          <div>
            <div className="text-5xl">Signup</div>
            <div className="m-10">
              {" "}
              Already have an account ?
              <div>
                <Button onClick={() => router.push("/api/auth/signin")}>
                  Signin
                </Button>
              </div>
            </div>
          </div>

          <form onSubmit={handleSignup}>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="text"
            />
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
            <Button type="submit">Sign Up</Button>
          </form>
        </div>
      </div>
    </>
  );
}
