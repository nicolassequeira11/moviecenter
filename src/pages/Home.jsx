import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// CONTEXTS
import { NavContext } from "../context/NavContext";
import { MovieSelectedContext } from "../context/MovieSelectedContext";

// COMPONENTS
import { PrincipalButton } from "../components/Buttons";
import { Footer } from "./components/Footer";
import { Carousel } from "../components/Carousel";
import { Movies } from "./components/Movies";
import { Proximos } from "./components/Proximos";
import { Teatro } from "./components/Teatro";
import { Tickets } from "./components/Tickets";
import { Snacks } from "./components/Snacks";
import { Shop } from "./components/Shop";

export const Home = () =>{
  const { setIsNavClick } = useContext(NavContext);
  const { handleMovieSelected } = useContext(MovieSelectedContext);

  const [changeMovies, setChangeMovies] = useState(true);
  const [isTickets, setIsTickets] = useState(true);
  const [isSnacks, setIsSnacks] = useState(false);
  const [isShop, setIsShop] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsNavClick(false);
    AOS.init({ duration: 1500 });
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
    {name:"El Niño y la Garza", img:"./banner6.jpg"},
    {name:"Pobres Criaturas", img:"./banner7.jpg"},
    {name:"Bob Marley La Leyenda", img:"./banner8.jpg"}
  ]

  return(
    <div 
      className="bg-gray2 max-md:pt-10 text-white"
    >

      {/* Carousel Banners */}
      <div>
        <div 
          className="max-md:hidden"
          data-aos="fade-zoom-in" 
          data-aos-duration="1000"
        >
          <Carousel array={banners} />
        </div>

        <div>
          <Tickets 
            className={`${isTickets ? "" : "hidden"}`} 
            onClickSnacks={()=> {
              setIsTickets(false);
              setIsSnacks(true);
            }}  
            onClickShop={()=> {
              setIsTickets(false);
              setIsShop(true);
            }}  
          />
          <Snacks 
            className={`${isSnacks ? "" : "hidden"}`} 
            onClickTickets={() => {
              setIsSnacks(false);
              setIsTickets(true);
            }}
            onClickShop={() => {
              setIsSnacks(false);
              setIsShop(true);
            }}
          />
          <Shop 
            className={`${isShop ? "" : "hidden"}`} 
            onClickTickets={() => {
              setIsShop(false);
              setIsTickets(true);
            }}
            onClickSnacks={() => {
              setIsShop(false);
              setIsSnacks(true);
            }}
          />
        </div>
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
            background="bg-gray2 text-white hover:bg-darkpink hover:bg-opacity-60 border-2 border-darkpink border-opacity-70"
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
            background="bg-gray2 text-white hover:bg-darkpink hover:bg-opacity-50 border-2 border-darkpink border-opacity-70"
            handleMovieSelected={handleMovieSelected} 
          />
        </div>
      </div>
      
      <Footer />
    </div>
  )
}