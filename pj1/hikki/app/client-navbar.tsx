"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function ClientNavbar() {
  const pathname = usePathname();

  // Navbar should be hidden on "/", "/signup", and "/signin"
  const shouldShowNavbar = !["/", "/signup", "/signin"].includes(pathname);

  return shouldShowNavbar ? <Navbar /> : null;
}
