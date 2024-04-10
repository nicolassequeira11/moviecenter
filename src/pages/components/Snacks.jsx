import React from "react";
import { MySelect } from "../../components/Select";
import { useNavigate } from "react-router-dom";
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import StoreIcon from '@mui/icons-material/Store';
import { PrincipalButton } from "../../components/Buttons";

export const Snacks = ({className, onClick, onClickTickets, onClickShop}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/checkout");
  }

  const location = [
    {"site":"Montevideo Shopping", "time":"20:30hs - Esp"}, 
    {"site":"Nuevocentro Shopping", "time":"20:30hs - Sub"}, 
    {"site":"Portones Shopping", "time":"20:30hs - Esp"}, 
    {"site":"Punta Carretas Shopping", "time":"20:30hs - Sub"}
  ];

  return (
    <div className={`max-md:relative max-md:mt-8 max-md:z-0 max-md:w-11/12 w-3/12 max-md:mx-auto absolute z-20 md:top-20 md:right-5 ${className}`}>
      <div className="flex mb-2 font-semibold select-none">
        <button 
          className="w-1/3 px-6 rounded-s-xl hover:bg-darkpink hover:bg-opacity-30 
            my-auto border-2 justify-center border-darkpink py-4 flex drop-shadow-md"
          onClick={onClickTickets}
        >
          Entradas
          <LocalMoviesIcon 
            className="flex my-auto ms-1" 
          />
        </button>
        <button 
          className="w-1/3 px-6 py-4 flex border-t-2 bg-gradient-to-tr to-lightpink from-pink-800 
            justify-center border-darkpink border-b-2 cursor-pointer drop-shadow-md"
          onClick={onClick}
        >
          Snacks
          <LocalDrinkIcon 
            className="flex ms-1" 
          />
        </button>
        <div 
          className="w-1/3 px-6 py-4 border-2 rounded-e-xl border-s-2 justify-center drop-shadow-md
            border-darkpink flex hover:bg-darkpink hover:bg-opacity-30 cursor-pointer"
          onClick={onClickShop}
        >
          Shop
          <StoreIcon 
            className="flex ms-1" 
          />
        </div>
      </div>
      <div className="flex flex-col m-auto">
        <MySelect
          className="w-full text-black py-2 m-auto"
          placeholder="¿Dónde?"
          array={location}
          nameSection="site"
        />

        <p className="flex font-semibold">
          Las compras de snacks se retiran en el horario de funcionamiento de cada complejo.
        </p>

        <PrincipalButton
          text="COMPRAR"
          color="text-white font-bold text-[16px]"
          shadow="shadow-xl"
          rounded="rounded-lg"
          className="my-2"
          onClick={handleNavigate}
          background="bg-gradient-to-tr to-lightpink from-pink-800"
          />
      </div>
    </div>
  );
};
