import React from "react";
import dataMovies from "../../data/dataMovies.json";
import { PrincipalButton } from "../../components/Buttons";
import { CarouselMovies } from "../../components/Carousel";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";

export const Proximos = ({ handleChangeMovies, isHovered, setIsHovered, handleMovieSelected }) => {
  const dataProximos = dataMovies.find((item) => item.name === "Proximos");

  return (
    <div className="pt-5 pb-10">
      <div className="w-11/12 flex justify-between mx-auto flex-wrap">
        <h2 className="text-white flex py-5 text-4xl max-md:text-3xl max-md:mx-auto">
          <LocalMoviesIcon className="my-auto scale-125 me-2" />
          Próximos estrenos
        </h2>
        <div className="my-auto max-md:mx-auto max-md:mb-5 flex rounded-full">
          <div className="border-2 border-darkpink border-opacity-70 rounded-full">
            <PrincipalButton
              text="Cartelera"
              color="text-white hover:bg-opacity-60 hover:bg-darkpink"
              shadow="shadow-xl w-6/12"
              rounded="rounded-s-full"
              onClick={handleChangeMovies}
              background="bg-gray"
            />
            <PrincipalButton
              text="Próximamente"
              color="text-white"
              shadow="shadow-xl w-6/12"
              rounded="rounded-e-full"
              background="bg-gradient-to-tr to-lightpink from-pink-800"
            />
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        <CarouselMovies 
          array={dataProximos.list} 
          isHovered={isHovered} 
          handleMovieSelected={handleMovieSelected}
        />
      </div>
    </div>
  );
};
