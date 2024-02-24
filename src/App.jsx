import './App.css';
import React, { useState, useEffect } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';

import { Navbar } from './pages/components/Navbar';
import { Home } from './pages/Home';
import { MovieInfo } from './pages/MovieInfo';
import { CarteleraMovies } from './pages/CarteleraMovies';
import { Oscars } from './pages/Oscars';
import { CarteleraTeatro } from './pages/CarteleraTeatro';
import { FAQ } from './pages/FAQ';
import { Promos } from './pages/Promos';

export const App = () => {
  const initialMovieSelected = JSON.parse(localStorage.getItem('movieSelected')) || [];
  const [movieSelected, setMovieSelected] = useState(initialMovieSelected);
  const [isNavClick, setIsNavClick] = useState(false);

  const handleNavClick = () => {
    setIsNavClick(prevIsNavClick => !prevIsNavClick);
  }

  const handleMovieSelected = (movie) => {
    setMovieSelected(movie);
  }

  useEffect(() => {
    localStorage.setItem('movieSelected', JSON.stringify(movieSelected));
  }, [movieSelected]);

  return (
    <>
      <Navbar 
        handleNavClick={handleNavClick}
        isNavClick={isNavClick}
      />

      <Routes>
        <Route
          path="/"
          element={<Home 
            handleMovieSelected={handleMovieSelected} 
            setIsNavClick={setIsNavClick}
          />}
        />
        <Route
          path="/info"
          element={<MovieInfo 
            movieSelected={movieSelected} 
            setIsNavClick={setIsNavClick}
          />}
        />
        <Route
          path="/cartelera"
          element={<CarteleraMovies 
            movieSelected={movieSelected} 
            handleMovieSelected={handleMovieSelected} 
            setIsNavClick={setIsNavClick}
          />}
        />
        <Route
          path="/teatro"
          element={<CarteleraTeatro 
            movieSelected={movieSelected} 
            handleMovieSelected={handleMovieSelected} 
            setIsNavClick={setIsNavClick}
          />}
        />
        <Route
          path="/oscars"
          element={<Oscars 
            setIsNavClick={setIsNavClick}
          />}
        />
        <Route
          path="/faq"
          element={<FAQ 
            setIsNavClick={setIsNavClick}
          />}
        />
        <Route
          path="/promos"
          element={<Promos 
            setIsNavClick={setIsNavClick}
          />}
        />
      </Routes>
    </>
  )
}