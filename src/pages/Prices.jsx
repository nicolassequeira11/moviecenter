import React, { useEffect, useContext } from "react";
import dataPrices from "../data/dataPrices.json";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { PriceComponente } from "./components/PriceComponent";
import { Footer } from "./components/Footer";
import { NavContext } from "../context/NavContext";

export const Prices = () => {
  const { setIsNavClick } = useContext(NavContext);

  useEffect(() => {
    setIsNavClick(false);
  }, [])

  const prices = dataPrices;

  return(
    <div className="bg-gray2">
      <div className="max-xl:w-11/12 xl:w-8/12 max-md:w-11/12 mx-auto pt-16 text-gray-200">
        <h2 className="text-white max-md:mx-auto flex py-5 text-4xl max-md:text-2xl max-md:w-11/12">
          <MonetizationOnIcon className="my-auto scale-125 me-2" />
          Precios
        </h2>
        <div className="mt-6 pb-6 only:md:text-2xl">
          <h2 className="text-2xl only:md:text-3xl border-b-2 border-darkpink">
            Funciones
          </h2>
          <div className="flex flex-wrap mt-12 mx-4 text-center">
            <div className="w-1/3 max-md:w-full max-md:my-4">
              <p className="text-lg only:md:text-2xl">Funciones 2D</p>
              <p>Todos los días: $430</p>
            </div>
            <div className="w-1/3 max-md:w-full max-md:my-4">
              <p className="text-lg only:md:text-2xl">Funciones 3D</p>
              <p>Mayores de 60 años: todos los días $390</p>
            </div>
            <div className="w-1/3 max-md:w-full max-md:my-4">
              <p className="text-lg only:md:text-2xl">Funciones 4D E-Motion</p>
              <p>Todos los días: $690</p>
            </div>
          </div>
        </div>
        <PriceComponente 
          array={prices[0].prices[1].Snacks}
          title="Snacks"
        />

      </div>
      <Footer />
    </div>
  )
}