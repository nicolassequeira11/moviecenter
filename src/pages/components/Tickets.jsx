import React, { useState } from "react";
import { MySelect } from "../../components/Select";
import dataMovies from "../../data/dataMovies.json";
import dataTeatro from "../../data/dataTeatro.json";
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import StoreIcon from '@mui/icons-material/Store';
import { PrincipalButton } from "../../components/Buttons";
import { Counter } from "../../components/Counter";

export const Tickets = ({className, onClickSnacks, onClickShop}) => {
  const [count, setCount] = useState(1);

  const cartelera = dataMovies.find(item => item.name === "Cartelera");
  const teatro = dataTeatro.find(item => item.name === "Teatro");

  const newArray = [cartelera, teatro];
  const newArrayList = [...cartelera.list, ...teatro.list]

  const location = [
    {"site":"Montevideo Shopping", "time":"20:30hs - Esp"}, 
    {"site":"Nuevocentro Shopping", "time":"20:30hs - Sub"}, 
    {"site":"Portones Shopping", "time":"20:30hs - Esp"}, 
    {"site":"Punta Carretas Shopping", "time":"20:30hs - Sub"}
  ];

  const pay = [
    {"method": "Débito / Crédito", "price": "$430"},
    {"method": "2x1 OCA Blue", "price": "$430"}
  ]

  return (
    <div className={`max-md:relative max-md:mt-8 max-md:z-0 max-md:w-11/12 w-3/12 
      max-md:mx-auto absolute z-10 md:top-20 md:right-5 ${className}`}
    >
      <div className="flex mb-2 font-semibold select-none">
        <div className="w-1/3 cursor-pointer px-6 rounded-s-xl drop-shadow-md
          bg-gradient-to-tr to-lightpink from-pink-800 my-auto border-2 justify-center border-darkpink py-4 flex">
          Entradas
          <LocalMoviesIcon 
            className="flex my-auto ms-1" 
          />
        </div>
        <div 
          className="w-1/3 px-6 py-4 flex border-t-2 justify-center drop-shadow-md
            border-darkpink border-b-2 hover:bg-darkpink hover:bg-opacity-30 cursor-pointer"
          onClick={onClickSnacks}
        >
          Snacks
          <LocalDrinkIcon 
            className="flex ms-1" 
          />
        </div>
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
          placeholder={newArray[0].name}
          array={newArray}
          nameSection="name"
        />
        <MySelect
          className="w-full text-black py-2 m-auto"
          placeholder="¿Qué vas a ver?"
          array={newArrayList}
          nameSection="title"
        />
        <MySelect
          className="w-full text-black py-2 m-auto"
          placeholder="¿Dónde?"
          array={location}
          nameSection="site"
        />
        <MySelect
          className="w-full text-black py-2 m-auto"
          placeholder="¿Cuándo?"
          array={location}
          nameSection="site"
        />
        <MySelect
          className="w-full text-black py-2 m-auto"
          placeholder="¿A qué hora?"
          array={location}
          nameSection="time"
        />
        <MySelect
          className="w-full text-black py-2 m-auto"
          placeholder="Forma de pago"
          array={pay}
          nameSection="method"
        />
        <div className="py-2 justify-center flex">
          <p className="w-1/2 mx-auto justify-center my-auto flex">
            ¿Cuántas entradas?
          </p>
          <div className="w-1/2">
            <Counter />
          </div>
        </div>
          <PrincipalButton
            text="COMPRAR"
            color="text-white font-bold text-[16px]"
            shadow="shadow-xl"
            rounded="rounded-lg"
            className="my-2"
            background="bg-gradient-to-tr to-lightpink from-pink-800"
          />
      </div>
    </div>
  );
};
