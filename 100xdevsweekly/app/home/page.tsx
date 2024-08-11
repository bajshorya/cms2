import { Button } from "@/components/ui/button";
import HomeSelection from "@/components/HomeSelection";
import React from "react";
const page = () => {
  return (
    <div className="h-screen flex items-center">
      <div className="w-1/2 flex justify-center items-center ">
        <HomeSelection
          label="Click Here To see the assignments "
          to="Assignments"
        />
      </div>

      <div className="w-0.5 bg-gray-500 h-full"></div>

      <div className="w-1/2 flex justify-center items-center ">
        <HomeSelection
          label="Click Here To see the solutions "
          to="Solutions"
        />
      </div>
    </div>
  );
};
export default page;
