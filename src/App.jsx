import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

// PROVIDERS
import { NextUIProvider } from "@nextui-org/react";
import { NavProvider } from './context/NavContext';
import { MovieSelectedProvider } from './context/MovieSelectedContext';

// PAGES
import { Navbar } from './pages/components/Navbar';
import { Home } from './pages/Home';
import { MovieInfo } from './pages/MovieInfo';
import { CarteleraMovies } from './pages/CarteleraMovies';
import { Oscars } from './pages/Oscars';
import { CarteleraTeatro } from './pages/CarteleraTeatro';
import { FAQ } from './pages/FAQ';
import { Promos } from './pages/Promos';
import { Prices } from './pages/Prices';
import { Checkout } from './pages/Checkout/Checkout';
import { MovieKids } from './pages/MovieKids';
import { Corporativo } from './pages/Corporativo.jsx/Corporativo';

export const App = () => {

  return (
    <NextUIProvider>
      <NavProvider>
        <MovieSelectedProvider>
          <ScrollToTop />
          <Navbar />

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/info"
              element={<MovieInfo />}
            />
            <Route
              path="/cartelera"
              element={<CarteleraMovies />}
            />
            <Route
              path="/teatro"
              element={<CarteleraTeatro />}
            />
            <Route
              path="/oscars"
              element={<Oscars />}
            />
            <Route
              path="/faq"
              element={<FAQ />}
            />
            <Route
              path="/promos"
              element={<Promos />}
            />
            <Route
              path="/prices"
              element={<Prices />}
            />
            <Route
              path="/checkout"
              element={<Checkout />}
            />
            <Route
              path="/moviekids"
              element={<MovieKids />}
            />
            <Route
              path="/corporativo"
              element={<Corporativo />}
            />

          </Routes>
        </MovieSelectedProvider>
      </NavProvider>
    </NextUIProvider>
  )
}