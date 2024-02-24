import React, { useEffect } from "react";
import oscarsBanner from "./public/media/oscars/oscarsBanner.jpg";
import oscarsTextWeb from "./public/media/oscars/oscarsTextWeb.jpg";
import oscarsFooter from "./public/media/oscars/oscarsFooter.jpg";
import { Footer } from "./components/Footer";

export const Oscars = ({setIsNavClick}) => {

  useEffect(() => {
    setIsNavClick(false);
  }, [])

  return(
    <div className="bg-black">
      <div className="w-6/12 mx-auto">
        <img src={oscarsBanner} className="mx-auto" />
        <img src={oscarsTextWeb} />
        <img src={oscarsFooter} />
      </div>
      <Footer />
    </div>
  )
}