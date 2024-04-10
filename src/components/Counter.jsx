import React from "react";
import { useCounter } from "../hooks/useCounter.jsx";
import { useShopList } from "../hooks/useShopList";

export const Counter = ({item}) => {
  const {increase, decrement, countItem} = useCounter();
  const {addItem} = useShopList();

  return(
    <div className="flex justify-center w-full select-none">
      <p 
        className={` py-2 font-bold text-center w-3/12 rounded-s-lg cursor-pointer 
          ${countItem === 0 ? "bg-darkpink bg-opacity-20 cursor-no-drop" : "bg-gradient-to-tr to-lightpink from-pink-800"}`}
        onClick={decrement}
      >
        -
      </p>
      <p className="bg-white py-2 text-center w-4/12 text-gray-500">
        {countItem}
      </p>
      <p 
        className="bg-gradient-to-tr to-lightpink from-pink-800 py-2 font-bold text-center w-3/12 rounded-e-lg cursor-pointer"
        onClick={()=> {
          increase(); 
          addItem(item)
        }}
      >
        +
      </p>
    </div>
  )
}