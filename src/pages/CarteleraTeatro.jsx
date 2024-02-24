import React, { useEffect } from "react";
import { LayoutCartelera } from "./components/LayoutCartelera";

export const CarteleraTeatro = ({dataArray, setIsNavClick, handleMovieSelected}) => {

  useEffect(() => {
    setIsNavClick(false);
  }, [])

  return(
    <div>
      <LayoutCartelera 
        dataArray={dataArray}
        title="Teatro"
        handleMovieSelected={handleMovieSelected}
      />
    </div>
  )
}