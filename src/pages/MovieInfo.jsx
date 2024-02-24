import React from "react";
import { ModalTrailer } from "../components/Modal";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { PrincipalButton } from "../components/Buttons";
import { Footer } from "./components/Footer";

export const MovieInfo = ({ movieSelected }) => {
  return (
    <div className="bg-gray1">
      <div>
        <div className="relative flex">
          <img
            src={movieSelected.banner}
            className="flex h-[37rem] max-md:h-[20rem] w-full object-cover"
          />
          {movieSelected.trailer &&
          <div
            className="absolute h-20 w-20 top-[45%] max-md:top-[43%] left-[48%] max-md:left-[40%] bg-opacity-50 
            bg-gray1 hover:bg-darkpink z-10 hover:bg-opacity-50 rounded-full"
          >
            <ModalTrailer
              children={
                <iframe
                  className="h-[30rem]"
                  src={movieSelected.trailer}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen="true"
                ></iframe>
              }
            />
          </div>
          }
          <div className="h-[37rem] max-md:h-[20rem] absolute bg-gradient-to-t from-black to-40% to-transparent top-0 left-0 right-0 bottom-0"></div>

          {/* Principal info */}
          <div className="absolute max-md:top-[72%] top-[80%] max-md:left-[2%] left-[1%]">
            <p className="text-5xl max-md:text-2xl font-bold text-white max-md:pb-0 pb-3">
              {movieSelected.title}
            </p>
            <div className="text-white flex w-fit mt-4">
              <p className="bg-gray3 px-2 me-2">{movieSelected.calificate}</p>
              <p className="border-s-2 border-white px-2">
                {movieSelected.duration}
              </p>
              <p className="border-s-2 border-white ps-2">
                {movieSelected.category}
              </p>
            </div>
          </div>
        </div>

        {/* Movie details */}
        <div className="flex max-md:flex-col-reverse flex-wrap text-gray-200 w-11/12 mx-auto">
          <div className="w-8/12 max-md:w-full">
            <div className="mt-7 mb-3 mx-auto">
              <p className="text-3xl mb-2 font-semibold">Descripción</p>
              <p>{movieSelected.description}</p>
            </div>
            <div className="flex flex-wrap flex-row mx-auto">
              <div className="w-1/2 mt-7 max-md:w-full">
                <p className="font-semibold text-xl">Calificación</p>
                <p>{movieSelected.calificate}</p>
              </div>
              <div className="w-1/2 mt-7 max-md:w-full">
                <p className="font-semibold text-xl">Duración</p>
                <p>{movieSelected.duration}</p>
              </div>
              <div className="w-1/2 mt-7 max-md:w-full">
                <p className="font-semibold text-xl">Género</p>
                <p>{movieSelected.category}</p>
              </div>
              {movieSelected.distributor 
                ?
                <div className="w-1/2 mt-7 max-md:w-full">
                  <p className="font-semibold text-xl">Distribuidora</p>
                  <p>{movieSelected.distributor}</p>
                </div>
                :
                <div className="w-1/2 mt-7 max-md:w-full">
                  <p className="font-semibold text-xl">Precio</p>
                  <p>{movieSelected.price}</p>
                </div>
              }
              <div className="w-1/2 mt-7 max-md:w-full">
                <p className="font-semibold text-xl">Director</p>
                <p>{movieSelected.director}</p>
              </div>
              <div className="w-1/2 mt-7 max-md:w-full">
                <p className="font-semibold text-xl">Actores</p>
                <p>{movieSelected.actors}</p>
              </div>
            </div>
          </div>
          <div className="w-4/12 max-md:w-full flex max-md:justify-center justify-end">
            <div className="max-md:p-1 p-5 md:pe-0 max-md:full max-md:w-full w-10/12">
              <img
                src={movieSelected.img}
                className="h-[550px] w-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Schedule */}
          <div className="text-gray-200 w-full mx-auto border-t-2 border-darkpink">
            <h2 className="text-white flex py-5 text-4xl max-md:w-11/12 max-md:mx-auto max-md:justify-center">
              <ScheduleIcon className="my-auto scale-125 me-2" />
              Cartelera
            </h2>
            <div className="flex flex-wrap text-center">
              {movieSelected.location.map((locationItem, index) => (
                <div key={index} className="w-1/4 my-1 max-md:w-full">
                  <p className="font-semibold text-xl">{locationItem.site}</p>
                  {locationItem.time.map((timeItem, index) => (
                    <div key={index} className="w-full my-3">
                      <PrincipalButton
                        text={timeItem}
                        rounded="rounded-full"
                        width="w-fit"
                        shadow="shadow-xl"
                        background="bg-gray3 hover:bg-darkpink hover:bg-opacity-60"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
