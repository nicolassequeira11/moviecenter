import React, { useState } from "react";
import dataPrices from "../../../data/dataPrices.json";
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import { PrincipalButton } from "../../../components/Buttons";
import { MySelect } from "../../../components/Select";
import { Counter } from "../../../components/Counter";

import { useCounter } from "../../../hooks/useCounter.jsx";

export const SnackItem = () => {
  const products = [  
    ...dataPrices[0].prices[1].Snacks[0].items, 
    ...dataPrices[0].prices[1].Snacks[1].items, 
    ...dataPrices[0].prices[1].Snacks[2].items, 
    ...dataPrices[0].prices[1].Snacks[3].items, 
    ...dataPrices[0].prices[1].Snacks[4].items, 
    ...dataPrices[0].prices[1].Snacks[5].items, 
    ...dataPrices[0].prices[1].Snacks[6].items
  ];

  const [buttonClicked, setButtonClicked] = useState(null);
  const [arraySnacks, setArraySnacks] = useState(products);
  const {} = useCounter(0);

  const filterSnacks = (itemType) => {
    switch (itemType) {
      case "Snacks": 
      case "Pop": 
      case "Movie Shop": 
      case "Combos": 
      case "Golosinas": 
      case "Bebidas": 
      case "Calientes": 
        setArraySnacks(products.filter((item) => item.type === itemType));
        break;
      default:
        setArraySnacks(products);
    }
  };

  const handleClick = (index) => {
    setButtonClicked(index);

    // Disable the button if it is selected and disable filter
    if (buttonClicked === index) {
      setButtonClicked(null);
      setArraySnacks(products);
    }
  };

  const snacks = [
    {"name":"Snacks"}, 
    {"name":"Pop"},
    {"name":"Movie Shop"}, 
    {"name":"Combos"}, 
    {"name":"Golosinas"}, 
    {"name":"Bebidas"}, 
    {"name":"Calientes"}
  ];

  return(
    <div className="flex flex-wrap h-fit">
      <div className="w-full max-md:flex-col max-md:mb-4 max-md:-top-1 flex sticky top-0 bg-gray3 h-fit">
        <h2 className="text-white w-3/12 max-md:w-full max-md:mx-auto flex py-5 text-4xl max-md:text-2xl">
          <LocalDrinkIcon className="my-auto scale-125 me-2" />
            <p className="my-auto">Snacks</p>
        </h2>
        <div className="my-auto w-9/12 max-md:w-full max-md:border-b-2 max-md:border-darkpink max-md:flex-wrap max-md:mx-auto flex">
          {snacks.map((item, index) => (
            <div key={index} className="mx-1 max-md:hidden max-md:my-1 max-md:mx-auto">
              <PrincipalButton
                className="bg-gray3 border-2 border-darkpink"
                text={item.name}
                color="text-white hover:bg-opacity-60 hover:bg-darkpink"
                onClick={() => {
                  filterSnacks(item.name);
                  handleClick(index, item.type);
                }}
                background={
                  buttonClicked === index
                    ? "bg-gradient-to-tr to-lightpink via-mypink from-pink-800 border-2 border-darkpink"
                    : "bg-gray3 border-2 border-darkpink"
                }
              />
            </div>
          ))}
            <MySelect
              className="w-full text-black py-2 m-auto md:hidden"
              placeholder="Selecciona tu snack"
              array={snacks}
              onChange={(e) => filterSnacks(e.target.value)}
              nameSection="name"
            />              
        </div>
      </div>
      {arraySnacks.map(item => {

        return(
        <div className="flex max-sm:w-full h-fit">
          <div 
            key={item.id} 
            className="mx-auto my-2 px-2 h-fit flex flex-wrap flex-col"
          >
            <img 
              src={item.img} 
              className="rounded-lg w-[160px] max-sm:w-full"
            />
            <div className="flex my-5 text-white">
              <p className="w-5/12 font-semibold m-auto text-center text-lg">
                {`$${item.price}`}
              </p>
              <Counter item={item} />
            </div>
          </div>
        </div>
        )}
      )}
      
    </div>
  )
}