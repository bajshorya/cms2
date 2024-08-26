"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const session = useSession();
  const router = useRouter();
  return (
    <>
      <div>
        <div className="flex items-center justify-center min-h-screen">
          {" "}
          <Button size="lg" onClick={() => router.push("/signup")}>
            Get Started
          </Button>
        </div>
        {/* <Button>hello</Button>
        {JSON.stringify(session.data?.user)} */}
      </div>
    </>
  );
}
