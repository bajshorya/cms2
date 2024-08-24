"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn, signOut } from "next-auth/react";
const Navbar = () => {
  const router = useRouter();
  return (
    <header className="bg-gray-900 text-white shadow-md rounded-b-lg py-4 px-6 border">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="text-center text-5xl font-bold mb-4">Hikki</div>

        <div className="flex justify-between items-center w-full">
          <nav className="space-x-4 flex">
            <div>
              <Link href="/">
                <Button variant="link">Home</Button>
              </Link>
            </div>
            <div>
              <Link href="/about">
                <Button variant="link">About</Button>
              </Link>
            </div>
            <div>
              <Link href="/signup">
                <Button variant="link">Signup</Button>
              </Link>
            </div>
            <div>
              <Button
                variant="link"
                onClick={() => {
                  signIn();
                }}
              >
                Signin
              </Button>
              <Button
                variant="link"
                onClick={() => {
                  signOut();
                }}
              >
                Logout
              </Button>
            </div>
            <div>
              <Link
                href="https://github.com/bajshorya/cms2.git"
                target="_blank"
              >
                <Button variant="link">Source</Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
