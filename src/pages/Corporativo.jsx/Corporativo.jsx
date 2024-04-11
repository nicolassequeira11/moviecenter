import { useContext, useEffect } from "react";
import { NavContext } from "../../context/NavContext";

import { LayoutCorporativo } from "./components/LayoutCorporativo";
import { Footer } from "../components/Footer";

import Background from "../../../public/corporativo/background1.jpg";
import BackgroundAvant from "../../../public/corporativo/avant/AvantPremiere1.jpg";
import BackgroundEventos from "../../../public/corporativo/eventos/backgroundEventos.jpg";
import BackgroundAlquiler from "../../../public/corporativo/alquiler/backgroundAlquiler.jpg";
import BackgroundMarca from "../../../public/corporativo/marca/Activacion5.jpg";

import { Eventos, Avants, Alquiler } from "../../data/dataCorporativo";
import logo from "../../../public/logo-mobile.png";

export const Corporativo = () => {
  const { setIsNavClick } = useContext(NavContext);

  useEffect(() => {
    setIsNavClick(false);
  }, [])
  
  return(
    <div className="bg-gray1">
      <div className="relative bg-gray1">
        <img src={Background} className="opacity-40 max-md:h-[95vh] md:h-[45vh] lg:h-[95vh]" />
        <div className="text-white absolute left-0 right-0 top-[0] bottom-[0] justify-center flex flex-col text-center z-10">
          <div 
            className="border-4 border-darkpink p-6 bg-black bg-opacity-80 w-7/12 max-lg:w-[80vw] mx-auto"
          >
            <h2 className="text-4xl font-bold mb-4">
              Entradas corporativas
            </h2>
            <p className="w-9/12 mx-auto">
              Regalar una entrada de cine es regalar una experiencia compartida. Entradas de cine o teatro para empresas o instituciones que quieran brindar una experiencia única a sus clientes o colaboradores. Regalá emociones!
            </p>
          </div>
        </div>
      </div>
      <LayoutCorporativo 
        array={Eventos}
        showCarousel="true"
        img={BackgroundEventos}
        positionX="left-[10%]"
        title="Eventos en pantalla grande"
        logo={logo}
      />
      <LayoutCorporativo 
        array={Avants}
        showCarousel="true"
        img={BackgroundAvant}
        positionX="right-[10%]"
        title="Avant premiere"
        logo={logo}
      />
      <LayoutCorporativo 
        array={Alquiler}
        showCarousel="true"
        img={BackgroundAlquiler}
        positionX="left-[10%]"
        title="Alquiler de sala"
        logo={logo}
      />
      <LayoutCorporativo 
        img={BackgroundMarca}
      />
      <div 
        className="border-4 -top-16 relative z-10 bg-black border-darkpink w-fit px-10 py-6 
          mx-auto -bottom-[11%] text-white text-center left-0 right-0 text-sm max-md:w-[80vw]"
      >
        <p className="">
          Paquetes desde cien unidades a precios bonificados.
        </p>
        <p className="">
          Todos los complejos Movie, todos los días, en todas sus horarios.
        </p>
        <p className="">
          La compras hoy y las pedís cuando las quieras utilizar. Vencimiento extendido.
        </p>
        <p className="">
          Categorías de entradas: 2D, 3D Y 4D. Undermovie y Teatro Movie. Opciones con pop y refresco.
        </p>
      </div>
      <Footer />
    </div>
  )
}