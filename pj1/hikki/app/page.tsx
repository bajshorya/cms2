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
        {/* <Button>hello</Button>
        {JSON.stringify(session.data?.user)} */}
        <Button onClick={() => router.push("/signup")}>Get Started</Button>
      </div>
    </>
  );
}
