"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function ClientNavbar() {
  const pathname = usePathname();
  const shouldShowNavbar =
    !pathname.includes("/signin") && !pathname.includes("/signup");
  // !pathname.includes("/");

  return shouldShowNavbar ? <Navbar /> : null;
}
