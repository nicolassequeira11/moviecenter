import React from "react";
import { Link } from "react-router-dom";
import LogoOversize from "/logo-oversize.png";
import MovieVivilo from "/movie-vivilo.png";
import LogoNS from "/logo-ns.png";

import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

export const Footer = () => {
  return (
    <footer className="mt-5 max-md:mt-12 overflow-hidden bg-gradient-to-t from-20% from-black to-transparent">
      <img
        src={LogoOversize}
        className="relative w-[10rem] opacity-20 top-80 -left-8 max-md:hidden"
      />
      <div className="mx-auto justify-center flex mb-10">
        <img src={MovieVivilo} className="w-[14rem] max-md:w-[12rem]" />
      </div>
      <div className="flex mx-auto relative max-md:flex-wrap justify-center mb-10">
        <Link
          className="mx-2 text-white p-3 flex w-fit rounded-full border-2 max-md:mx-1
              border-darkpink text-opacity-80 border-opacity-70 hover:bg-darkpink hover:bg-opacity-50"
        >
          <EmailIcon />
        </Link>
        <Link
          className="mx-2 text-white p-3 flex w-fit rounded-full border-2 max-md:mx-1
              border-darkpink text-opacity-80 border-opacity-80 hover:bg-darkpink hover:bg-opacity-50"
        >
          <InstagramIcon />
        </Link>
        <Link
          className="mx-2 text-white p-3 flex w-fit rounded-full border-2 max-md:mx-1
              border-darkpink text-opacity-80 border-opacity-80 hover:bg-darkpink hover:bg-opacity-50"
        >
          <WhatsAppIcon />
        </Link>
        <Link
          className="mx-2 text-white p-3 flex w-fit rounded-full border-2 max-md:mx-1
              border-darkpink text-opacity-80 border-opacity-80 hover:bg-darkpink hover:bg-opacity-50"
        >
          <YouTubeIcon />
        </Link>
        <Link
          className="mx-2 text-white p-3 flex w-fit rounded-full border-2 max-md:mx-1
              border-darkpink text-opacity-80 border-opacity-80 hover:bg-darkpink hover:bg-opacity-50"
        >
          <FacebookIcon />
        </Link>
        <Link
          className="mx-2 text-white p-3 flex w-fit rounded-full border-2 max-md:mx-1
              border-darkpink text-opacity-80 border-opacity-80 hover:bg-darkpink hover:bg-opacity-50"
        >
          <XIcon />
        </Link>
        <div className="flex my-auto md:absolute max-md:mt-8 top-10 right-6">
          <p className="flex text-center text-gray-200">Desarrollado por</p>
          <a href="https://nicolassequeira11.github.io/portafolio/" target="_blank" className="flex">
            <img src={LogoNS} className="w-[2rem] object-content ms-2" />
          </a>
        </div>
      </div>

    </footer>
  );
};
