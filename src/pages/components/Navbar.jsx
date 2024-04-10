import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "/logo-movie.png";
import LogoMobile from "/logo-mobile.png";
import { Ham } from "../../components/icons/Ham";
import { Close } from "../../components/icons/Close";
import Oscarimg from "/oscarsBoton.png";
import { ModalLogin } from "../../components/Modal";

import { NavContext } from "../../context/NavContext";

import TheaterComedy from "@mui/icons-material/TheaterComedy";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import HelpIcon from '@mui/icons-material/Help';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';

export const Navbar = () => {
  const { isNavClick, handleNavClick } = useContext(NavContext);

  const menuItems = [
    {
      "title": "Cartelera", 
      "icon": <LocalMoviesIcon />, 
      "url": "/cartelera"
    },
    {
      "title": "Teatro", 
      "icon": <TheaterComedy />, 
      "url": "/teatro"
    },
    {
      "title": "Oscars", 
      "icon": <EmojiEventsRoundedIcon />, 
      "url": "/oscars"
    },
    {
      "title": "Precios", 
      "icon": <MonetizationOnIcon />, 
      "url": "/prices"
    },
    {
      "title": "Promociones", 
      "icon": <LocalOfferIcon />, 
      "url": "/promos"
    },
    {
      "title": "Movie Kids", 
      "icon": <FamilyRestroomIcon />, 
      "url": "/moviekids"
    },
    {
      "title": "Preguntas frecuentes", 
      "icon": <HelpIcon />, 
      "url": "/faq"
    },
    {
      "title": "Corporativo", 
      "icon": <LocationCityRoundedIcon />, 
      "url": "/corporativo"
    }
  ]

  return(
    <header className="fixed top-0 z-20 w-full">
      <div className={`bg-black ${isNavClick ? "bg-opacity-100" : "bg-opacity-70"} flex absolute w-full justify-between`}>
        <div className="flex w-1/4">
          {isNavClick 
            ?
            <Close 
              className="h-8 w-8 max-md:mx-2 mx-4 my-auto text-white hover:text-darkpink cursor-pointer" 
              onClick={handleNavClick}
            />  
            : 
            <Ham 
              className="h-8 w-8 max-md:mx-2 mx-4 my-auto text-white hover:text-darkpink cursor-pointer" 
              onClick={handleNavClick}
            />
          }
          <Link to="/">
            <img src={Logo} className="w-28 my-auto flex py-3 max-md:hidden" />
            <img src={LogoMobile} className="w-8 my-auto flex py-3 md:hidden" />
          </Link>
        </div>

        <Link 
          to="/oscars" 
          className="w-2/4 my-auto cursor-pointer"
        >
          <img src={Oscarimg} className="h-10 max-md:p-2 flex object-contain mx-auto" />
        </Link>
        <div className="w-1/4 max-md:mx-0 max-md:text-sm max-md:me-3 pe-5 max-md:pe-0 justify-end text-white my-auto flex font-semibold cursor-pointer">
          <ModalLogin />
        </div>
        <div className={`bg-gray1 absolute top-[100%] h-[100vh] text-white 
          flex flex-col px-10 justify-start pt-6 animation duration-500 text-xl 
            ${isNavClick ? "translate-x-0" : "-translate-x-80"} `}
        >
          {menuItems.map((item, index) => (
            <Link 
              className="py-4" 
              to={item.url} 
              key={index}
              onClick={() => {localStorage.setItem("dataArray", item.title)}}
            >
              <div className="flex hover:text-darkpink">
                <div className="me-3 my-auto flex">
                  {item.icon}
                </div>
                <div>
                  {item.title}
                </div>
              </div>
              
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}