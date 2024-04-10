import React, { useEffect, useContext } from "react";
import oscarsBanner from "/oscars/oscarsBanner.jpg";
import oscarsTextWeb from "/oscars/oscarsTextWeb.jpg";
import oscarsFooter from "/oscars/oscarsFooter.jpg";
import oscarsTextMob from "/oscars/oscarsTextMob.jpg";
import { Footer } from "./components/Footer";
import { NavContext } from "../context/NavContext";
import AOS from "aos";
import "aos/dist/aos.css";

export const Oscars = () => {
  const { setIsNavClick } = useContext(NavContext);

  useEffect(() => {
    setIsNavClick(false);
    AOS.init({ duration: 1500 });
  }, [])

  return(

    
    <div className="bg-black max-md:pt-14">
      <div 
        className="w-6/12 max-md:w-11/12 mx-auto"
        data-aos="fade-zoom-in" 
        data-aos-duration="1000"
      >
        <img src={oscarsBanner} className="mx-auto" />
        <img src={oscarsTextWeb} className="max-md:hidden" />
        <img src={oscarsTextMob} className="max-md:flex hidden" />
        <img src={oscarsFooter} />
      </div>
      <Footer />
    </div>
  )
}