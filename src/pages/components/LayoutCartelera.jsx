import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import { Footer } from "./Footer";
import dataMovies from "../../data/dataMovies.json";
import dataTeatro from "../../data/dataTeatro.json";
import { PrincipalButton } from "../../components/Buttons";
import AOS from "aos";
import "aos/dist/aos.css";

export const LayoutCartelera = ({dataArray, handleMovieSelected, title}) => {
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    let localStorageArray = localStorage.getItem("dataArray");

    if (localStorageArray === "Cartelera") {
      setNewData(dataMovies.find((item) => item.name === "Cartelera").list);
    } else if (localStorageArray === "Teatro") {
      setNewData(dataTeatro.find((item) => item.name === "Teatro").list);
    }

    AOS.init({ duration: 1500 });
  }, [dataArray]);

  return (
    <div className="bg-gray2">
      <div className="w-11/12 pt-20 mx-auto">
        <h2 className="text-white border-b-2 border-darkpink max-md:mx-auto flex py-5 text-4xl max-md:w-11/12">
          <LocalMoviesIcon className="my-auto scale-125 me-2" />
          {title}
        </h2>
        <div className="lg:w-7/12 max-md:w-11/12 md:w-10/12 mx-auto text-gray-200">
          {newData.map((item, index) => (
              <div 
                key={index}           
                data-aos="fade-zoom-in" 
                data-aos-duration="500" 
                className="border-b-2 border-darkpink pt-14 pb-9 max-md:flex-wrap flex"
              >
                <Link 
                  to="/info"
                  className="w-fit max-md:w-full"
                  onClick={() => handleMovieSelected(item)}
                >
                  <img
                    src={item.img}
                    onClick={() => handleMovieSelected(item)}
                    className="min-w-[250px] w-[250px] max-md:w-full max-md:h-[30rem] h-[25rem] object-cover rounded-lg"
                  />
                  <Link to="/info">
                    <PrincipalButton
                      text="Ver Funciones"
                      rounded="rounded-full"
                      shadow="shadow-xl border-2 border-darkpink border-opacity-70"
                      onClick={() => handleMovieSelected(item)}
                      width="max-md:w-full w-fit mx-auto justify-center flex mt-5 max-md:text-lg"
                      background="bg-gray2 text-white hover:bg-darkpink hover:bg-opacity-60"
                    />
                  </Link>
                </Link>
                <div className="ms-10 max-md:ms-0 max-md:mt-6">
                  <p className="text-3xl">{item.title}</p>
                  <p className="bg-gray5 px-2 mb-4 mt-2 w-fit">
                    {item.calificate}
                  </p>
                  <div className="my-4">
                    <p className="font-semibold text-lg">Duración</p>
                    <p className="">{item.duration}</p>
                  </div>
                  <div className="my-4">
                    <p className="font-semibold text-lg">Género</p>
                    <p className="">{item.category}</p>
                  </div>
                  <div className="my-4">
                    <p className="font-semibold text-lg">Director</p>
                    <p className="">{item.director}</p>
                  </div>
                  <div className="my-4">
                    <p className="font-semibold text-lg">Actores</p>
                    <p className="">{item.actors}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>  
      <Footer />
    </div>
  );
};
