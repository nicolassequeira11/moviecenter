import React from "react";
import { Button } from "@nextui-org/react";

export const PrincipalButton = ({text, background, color, width, shadow, rounded, onClick}) => {
  return(
    <>
      <Button 
        className={`${background} ${color} ${shadow} ${rounded} ${width} focus:outline-none px-5 py-1`}
        onClick={onClick}
      >
        {text}
      </Button>
    </>
  )
}