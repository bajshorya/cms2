"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  return (
    <>
      <div>
        <Button>hello</Button>
        {JSON.stringify(session.data?.user)}
      </div>
    </>
  );
}
