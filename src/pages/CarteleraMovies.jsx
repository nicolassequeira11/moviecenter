import React, { useEffect } from "react";
import { LayoutCartelera } from "./components/LayoutCartelera";

export const CarteleraMovies = ({dataArray, setIsNavClick, handleMovieSelected}) => {
  
  useEffect(() => {
    setIsNavClick(false);
  }, [])

  return(
    <div>
      <LayoutCartelera 
        dataArray={dataArray}
        title="Cartelera"
        handleMovieSelected={handleMovieSelected}
      />
    </div>
  )
}