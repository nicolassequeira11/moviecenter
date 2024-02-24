import React, { useState } from "react";
import dataTeatro from "../../data/dataTeatro.json";
import { PrincipalButton } from "../../components/Buttons";
import { CarouselMovies } from "../../components/Carousel";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";

export const Teatro = ({handleMovieSelected}) => {
  const [data, setData] = useState(
    dataTeatro.find((item) => item.name === "Teatro").list
  );
  const [buttonClicked, setButtonClicked] = useState(null);

  const filterMovies = (value) => {
    const dataList = dataTeatro.find((item) => item.name === "Teatro").list;

    switch (value) {
      case "2D":
      case "3D":
      case "4D":
        setData(dataList.filter((item) => item.type.includes(value)));
        break;
      case "Sub":
      case "Esp":
        setData(dataList.filter((item) => item.language.includes(value)));
        break;
      default:
        setData(dataList);
    }
  };

  const handleClick = (index) => {
    setButtonClicked(index);

    // Disable the button if it is selected and disable filter
    if (buttonClicked === index) {
      setButtonClicked(null);
      setData(dataTeatro.find((item) => item.name === "Cartelera").list);
    }
  };

  return (
    <div className="pt-5 pb-10">
      <div className="w-11/12 justify-between flex mx-auto flex-wrap">
        <h2 className="text-white flex py-5 text-4xl max-md:w-11/12">
          <TheaterComedyIcon className="my-auto scale-125 me-2" />
          Teatro
        </h2>
        <div className="my-auto max-md:pb-3 max-md:w-full mx-auto w-1/4 justify-around flex"></div>
        <div className="my-auto justify-center max-md:pb-3 flex max-md:w-full"></div>
      </div>
      <div className="w-11/12 mx-auto">
        <CarouselMovies 
          array={data} 
          handleMovieSelected={handleMovieSelected}
        />
      </div>
    </div>
  );
};
