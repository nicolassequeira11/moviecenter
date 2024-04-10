import React, { useState } from "react";

export const useCounter = () => {
  const [countItem, setCountItem] = useState(0);

  const increase = () => setCountItem(countItem + 1);
  const decrement = () => {
    if(countItem > 0) {
      setCountItem(countItem - 1);
    } 
  }

  return {
    countItem,
    increase,
    decrement
  }
}