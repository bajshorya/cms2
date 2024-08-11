import React from "react";
import { Button } from "./ui/button";

interface HomeSelectionProps {
  to: string;
  label: string;
}

const HomeSelection: React.FC<HomeSelectionProps> = ({ to, label }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="m-8 text-lg font-semibold ">{label}</span>
      <Button>{to}</Button>
    </div>
  );
};

export default HomeSelection;
