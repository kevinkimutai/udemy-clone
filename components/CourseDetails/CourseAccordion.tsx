import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type ComponentProps = {
  desc: string;
};

const CourseAccordion = ({ desc }: ComponentProps) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" defaultChecked>
        <AccordionTrigger>Description</AccordionTrigger>
        <AccordionContent>{desc}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CourseAccordion;
