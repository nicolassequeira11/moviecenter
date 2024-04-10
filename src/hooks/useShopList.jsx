import { useState } from "react";

export const useShopList = () => {
  const [shopList, setShopList] = useState([]);

  const addItem = (item) => {
    setShopList([...shopList, item]);
  };

  return{
    shopList,
    addItem,
  }
}