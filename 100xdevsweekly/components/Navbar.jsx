import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md rounded-b-lg py-4 px-6 border">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="text-center text-5xl font-bold mb-4">
          100xDevsWeekly
        </div>

        <div className="flex justify-between items-center w-full">
          <nav className="space-x-4 flex">
            <div>
              <Link href="/home">
                <Button variant="link">Home</Button>
              </Link>
            </div>
            <div>
              <Link href="/about">
                <Button variant="link">About</Button>
              </Link>
            </div>
            <div>
              <Link href="/home">
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
