import React, { useEffect } from "react";
import { LayoutCartelera } from "./components/LayoutCartelera";

export const CarteleraTeatro = ({dataArray, setIsNavClick}) => {

  useEffect(() => {
    setIsNavClick(false);
  }, [])

  return(
    <div>
      <LayoutCartelera 
        dataArray={dataArray}
        title="Teatro"
      />
    </div>
  )
}