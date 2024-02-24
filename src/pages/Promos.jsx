import { useEffect } from "react";
import { Footer } from "./components/Footer";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import dataPromos from "../data/dataPromos.json"

export const Promos = ({setIsNavClick}) => {
  
  useEffect(() => {
    setIsNavClick(false);
  }, [])

  return(
    <div className="bg-gray1">
      <div className="w-8/12 max-md:w-11/12 mx-auto pt-16">
        <h2 className="text-white max-md:mx-auto flex py-5 text-4xl max-md:text-2xl max-md:w-11/12">
          <LocalOfferIcon className="my-auto scale-125 me-2" />
          Promociones
        </h2>
        <div>
          {dataPromos.map((item, index) => (
            <div className="border-b-2 border-darkpink py-10 flex max-md:flex-wrap">
              <div className="w-2/12 max-md:w-8/12 max-md:mx-auto me-2">
                <img src={item.img} className="h-20 w-full object-contain px-3" />
              </div>
              <div className="w-10/12 max-md:w-11/12 max-md:mx-auto">
                <h2 className="text-gray-200 text-2xl font-semibold max-md:text-center max-md:mt-4">{item.title}</h2>
                <p className="text-darkpink text-opacity-90 max-md:text-center">{item.subtitle}</p>
                <p className="text-gray-200 mt-6">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )  
}