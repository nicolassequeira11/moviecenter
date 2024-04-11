import React, { useContext, useEffect } from "react";
import { SnackItem } from "./components/SnackItem";
import { PrincipalButton } from "../../components/Buttons";
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { NavContext } from "../../context/NavContext";

import { useShopList } from "../../hooks/useShopList";

export const Checkout = () => {
  const { setIsNavClick } = useContext(NavContext);
  const { shopList, addItem } = useShopList();
  
  useEffect(() => {
    setIsNavClick(false);
  }, [])

  return(
    <div className="bg-gray2 overflow-hidden h-full">
      <div className="pt-16 mx-auto h-screen flex flex-col max-md:flex">
        <div className="flex">
          <div className="w-9/12 max-md:w-full flex flex-wrap px-8 h-fit">
            <div className="min-h-[85vh] max-h-[85vh] flex flex-wrap h-screen overflow-scroll scrollbar-hide justify-center scroll-checkout">
              <SnackItem />
            </div>
          </div>
          <div className="w-3/12 max-md:hidden border-s-4 border-gray2 text-white px-4 justify-between flex flex-col ">
            <div>
              <p>
                Complejo
              </p>
              <p className="font-semibold">
                Movie Montevideo
              </p>
            </div>
            <div className="overflow-y-scroll h-[78vh]">
              {shopList.map((item, index) => (
                <div 
                  key={index} 
                  className="flex h-28 py-3 border-b-1 border-gray4"
                >
                  <div className="w-3/12">
                    <img 
                      src={item.img} 
                      className="rounded-md" 
                    />
                  </div>
                  <div className="w-9/12 px-4">
                    <p>{item.description}</p>
                    <p>${item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative my-auto flex justify-between">
          <div className="w-3/12 max-md:hidden"></div>
          <div className="my-auto max-md:hidden flex w-6/12 justify-center">
            <div className="bg-darkpink p-1 mx-2 text-white rounded-full">
              <StoreIcon />
            </div>
            <div className="border-1 border-white p-1 mx-2 text-white rounded-full">
              <CreditCardIcon />
            </div>
            
          </div>
          <div className="w-3/12 max-md:w-full max-md:justify-center max-md:flex max-md:mb-4 px-2">
            <PrincipalButton 
              text={`Siguiente $${shopList.reduce((acc, item) => { return acc + item.price }, 0)}`}
              color="text-white"
              width="w-full max-md:w-11/12"
              rounded="rounded-lg"
              className="text-xl"
              background="bg-gradient-to-tr to-lightpink via-mypink from-pink-800"
            />
          </div>
        </div>
      </div>

    </div>
  )
}