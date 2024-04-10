import React, { useEffect, useContext } from "react";
import { LayoutCartelera } from "./components/LayoutCartelera";

// CONTEXTS
import { NavContext } from "../context/NavContext";
import { MovieSelectedContext } from "../context/MovieSelectedContext";

export const CarteleraMovies = ({dataArray}) => {
  const { setIsNavClick } = useContext(NavContext);
  const { handleMovieSelected } = useContext(MovieSelectedContext);
  
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