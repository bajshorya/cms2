import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface HomeSelectionProps {
  to: string;
  label: string;
  toPage: any;
}

const HomeSelection: React.FC<HomeSelectionProps> = ({ to, label, toPage }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="m-8 text-lg font-semibold ">{label}</span>
      <Link href={toPage}>
        <Button>{to}</Button>
      </Link>
    </div>
  );
};

export default HomeSelection;
