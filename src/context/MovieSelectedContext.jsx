import { useState, createContext, useEffect } from "react";

export const MovieSelectedContext = createContext();

export const MovieSelectedProvider = ({ children }) => {
  const initialMovieSelected = JSON.parse(localStorage.getItem('movieSelected')) || [];
  const [movieSelected, setMovieSelected] = useState(initialMovieSelected);

  const handleMovieSelected = (movie) => {
    setMovieSelected(movie);
  }

  useEffect(() => {
    localStorage.setItem('movieSelected', JSON.stringify(movieSelected));
  }, [movieSelected]);

  return (
    <MovieSelectedContext.Provider value={{ movieSelected, setMovieSelected, handleMovieSelected }}>
      {children}
    </MovieSelectedContext.Provider>
  )
}
