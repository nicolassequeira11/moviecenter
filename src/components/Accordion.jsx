import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export const MyAccordion = ({array, className, classNameItem}) => {
  return (
    <Accordion>
      {array.map((item, index) => (
        <AccordionItem key={index} title={item.question} className={className}>
          <p className={classNameItem}>{item.answer}</p>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
