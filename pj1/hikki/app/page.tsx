"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Signup from "./signup/page";

export default function Home() {
  const session = useSession();
  return (
    <>
      <div>
        {/* <Button>hello</Button>
        {JSON.stringify(session.data?.user)} */}
        <Signup />
      </div>
    </>
  );
}
