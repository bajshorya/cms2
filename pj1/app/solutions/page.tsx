import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Page = () => {
  return (
    <div>
      <div className="m-10 p-5">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Week-1</AccordionTrigger>
            <AccordionContent>
              Week-1 assignment Solutions
              <Accordion type="single" collapsible>
                <AccordionItem value="sub-item-1">
                  <AccordionTrigger>Day-1</AccordionTrigger>
                  <AccordionContent>Content for Day-1</AccordionContent>
                </AccordionItem>
                <AccordionItem value="sub-item-2">
                  <AccordionTrigger>Day-2</AccordionTrigger>
                  <AccordionContent>Content for Day-2</AccordionContent>
                </AccordionItem>
                <AccordionItem value="sub-item-3">
                  <AccordionTrigger>Day-3</AccordionTrigger>
                  <AccordionContent>Content for Day-3</AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Week-2</AccordionTrigger>
            <AccordionContent>Content for Week-2</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Page;
