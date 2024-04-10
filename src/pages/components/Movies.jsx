import React, { useState } from "react";
import dataMovies from "../../data/dataMovies.json";
import { PrincipalButton } from "../../components/Buttons";
import { CarouselMovies } from "../../components/Carousel";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";

export const Movies = ({ handleChangeMovies, handleMovieSelected }) => {
  const [dataCartelera, setDataCartelera] = useState(
    dataMovies.find((item) => item.name === "Cartelera").list
  );
  const [buttonClicked, setButtonClicked] = useState(null);

  const filterMovies = (value) => {
    const dataList = dataMovies.find((item) => item.name === "Cartelera").list;

    switch (value) {
      case "2D":
      case "3D":
      case "4D":
        setDataCartelera(dataList.filter((item) => item.type.includes(value)));
        break;
      case "Sub":
      case "Esp":
        setDataCartelera(
          dataList.filter((item) => item.language.includes(value))
        );
        break;
      default:
        setDataCartelera(dataList);
    }
  };

  const handleClick = (index) => {
    setButtonClicked(index);

    // Disable the button if it is selected and disable filter
    if (buttonClicked === index) {
      setButtonClicked(null);
      setDataCartelera(
        dataMovies.find((item) => item.name === "Cartelera").list
      );
    }
  };

  const buttons = [
    { text: "Sub" },
    { text: "Esp" },
    { text: "2D" },
    { text: "4D" },
  ];

  return (
    <div className="py-5 pb-10">
      <div className="w-11/12 justify-between flex mx-auto flex-wrap">
        <h2 className="text-white flex py-5 text-4xl max-md:text-3xl max-md:mx-auto">
          <LocalMoviesIcon className="my-auto scale-125 me-2" />
          Cartelera
        </h2>
        <div className="max-md:flex-col-reverse max-md:w-full w-3/4 flex justify-between">
          <div className="my-auto max-md:pb-5 max-md:w-full justify-around flex">
            {buttons.map((item, index) => (
              <div className="max-md:w-1/5 flex justify-center">
                <PrincipalButton
                  key={index}
                  text={item.text}
                  color="text-white hover:bg-opacity-60 hover:bg-darkpink border-opacity-70"
                  shadow="shadow-xl"
                  rounded="rounded-full"
                  width={"w-full max-md:mx-1 mx-2"}
                  onClick={() => {
                    filterMovies(item.text);
                    handleClick(index);
                  }}
                  background={
                    buttonClicked === index
                      ? "bg-gradient-to-tr to-lightpink via-mypink from-pink-800 border-2 border-darkpink"
                      : "bg-gray2 border-2 border-darkpink"
                  }
                />
              </div>
            ))}
          </div>
          <div className="my-auto justify-center max-md:pb-5 flex max-md:w-full">
            <div className="border-2 border-darkpink border-opacity-70 rounded-full">
              <PrincipalButton
                text="Cartelera"
                color="text-white"
                shadow="shadow-xl"
                rounded="rounded-s-full"
                background="bg-gradient-to-tr to-lightpink from-pink-800"
              />
              <PrincipalButton
                text="Próximos Estrenos"
                color="text-white hover:bg-opacity-60 hover:bg-darkpink"
                shadow="shadow-xl"
                rounded="rounded-e-full"
                onClick={handleChangeMovies}
                background="bg-gray2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        <CarouselMovies
          array={dataCartelera}
          handleMovieSelected={handleMovieSelected}
        />
      </div>
    </div>
  );
};
