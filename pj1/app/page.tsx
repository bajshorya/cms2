"use client";

import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();

  return (
    <>
      <Navbar />
      <div> {JSON.stringify(session.data?.user)}</div>
    </>
  );
}
