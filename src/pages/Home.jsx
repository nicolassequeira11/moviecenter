import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Components
import { PrincipalButton } from "../components/Buttons";
import { Footer } from "./components/Footer";
import { Carousel } from "../components/Carousel";
import { Movies } from "./components/Movies";
import { Proximos } from "./components/Proximos";
import { Teatro } from "./components/Teatro";

export const Home = ({handleMovieSelected, setIsNavClick}) =>{
  const [changeMovies, setChangeMovies] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsNavClick(false);
  }, [])

  const handleChangeMovies = () => {
    setChangeMovies(prevChangeMovies => !prevChangeMovies);
  }

  const handleData = (dataArray, url) => {
    localStorage.setItem("dataArray", dataArray);
    navigate(url);
  }

  const banners = [
    {name:"Oscars 2024", img:"./banner1.jpg"},
    {name:"La Sociedad de la Nieve", img:"./banner2.jpg"},
    {name:"Madame Web", img:"./banner3.jpg"},
    {name:"Demon Slayer", img:"./banner4.jpg"},
    {name:"Chicas Pesadas", img:"./banner5.jpg"},
    {name:"El Niño y la Garza", img:"./banner6.jpg"},
    {name:"Pobres Criaturas", img:"./banner7.jpg"},
    {name:"Bob Marley La Leyenda", img:"./banner8.jpg"}
  ]

  return(
    <div className="bg-gray1 max-md:pt-10 text-white">

      {/* Carousel Banners */}
      <div className="max-md:hidden">
        <Carousel array={banners} />
      </div>
      
      {/* Carousel Movies */}
      <div>
        {changeMovies 
          ? <Movies 
              handleChangeMovies={handleChangeMovies} 
              handleMovieSelected={handleMovieSelected} 
            /> 
          : <Proximos 
              handleChangeMovies={handleChangeMovies} 
              handleMovieSelected={handleMovieSelected} 
            />
        }
        <div className="w-11/12 mx-auto flex justify-between">
          <p className="text-sm text-gray4 my-auto max-md:hidden">
            Programación sujeta a cambios, a exhibirse desde el jueves 22 de Febrero al miércoles 28 de Febrero del 2024
          </p>
          <PrincipalButton 
            text="Ver Cartelera"
            rounded="rounded-full"
            width="max-md:w-full max-md:text-lg"
            onClick={()=> handleData("Cartelera", "/cartelera")}
            background="bg-gray3 hover:bg-darkpink hover:bg-opacity-60"
            handleMovieSelected={handleMovieSelected} 
          />
        </div>
      </div>

      {/* Carousel Theather */}
      <div>
        <Teatro 
          handleMovieSelected={handleMovieSelected}
        />
        <div className="w-11/12 mx-auto flex justify-between">
          <p className="text-sm text-gray4 my-auto max-md:hidden">
            Programación sujeta a cambios, a exhibirse desde el jueves 22 de Febrero al miércoles 28 de Febrero del 2024
          </p>
          <PrincipalButton 
            text="Ver Cartelera"
            rounded="rounded-full"
            width="max-md:w-full max-md:text-lg"
            onClick={()=> handleData("Teatro", "/teatro")}
            background="bg-gray3 hover:bg-darkpink hover:bg-opacity-50"
            handleMovieSelected={handleMovieSelected} 
          />
        </div>
      </div>
      
      <Footer />
    </div>
  )
}