import { useContext, useEffect } from "react";
import { Footer } from "./components/Footer";
import { NavContext } from "../context/NavContext";
import { PrincipalButton } from "../components/Buttons";
import MovieKidsIMG from "../../public/moviekids/MovieKids.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export const MovieKids = () => {
  const { setIsNavClick } = useContext(NavContext);

  useEffect(() => {
    setIsNavClick(false);
    AOS.init({ duration: 1500 });
  }, [])

  return(
    <div className="bg-[#020916] pt-24">
      <div className="flex max-md:flex-wrap text-white w-10/12 mx-auto">
        <img 
          src={MovieKidsIMG} 
          data-aos="fade-zoom-in" 
          data-aos-duration="1000" 
          className="w-6/12 max-md:w-11/12 max-md:h-[fit-content] max-md:mx-auto h-[80vh] object-contain object-top" 
        />
        <div className="w-6/12 max-md:w-11/12 mx-auto max-md:mt-8">

          {/* INFO */}
          <div className="w-11/12 mx-auto max-md:w-full">
            <h2 className="font-bold text-lg">
              Festejá en una sala solo para vos, elegí la película, invitá a tus amigos y disfruten del más rico pop.
            </h2>
            <ul className="my-10">
              <li className="my-4">- Disponibilidad en los 4 complejos de Movie</li>
              <li className="my-4">- Película a elección (sujeto a disponibilidad)</li>
              <li className="my-4">- Pop y bebida para todos</li>
              <li className="my-4">- Apto para todas las edades</li>
              <li className="my-4">- Atenciones para todos</li>
              <li className="my-4">- Momento para homenajear al cumpleañero</li>
            </ul>
            <p>
              Pago por transferencia bancaria o con Oca hasta 3 pagos. La reserva se realiza una vez señado el paquete elegido
            </p>
          </div>

          {/* CALL ACTION */}
          <div className="mx-auto mt-10 text-center max-md:mb-20">
            <p className="font-bold">Por reservas comunicarse con:</p>
            <p>Santiago Rodríguez</p>
            <PrincipalButton
              text="santiago.rodriguez@movie.com.uy"
              color="text-white font-bold text-[16px]"
              shadow="shadow-xl"
              rounded="rounded-lg"
              className="mt-4"
              background="bg-gradient-to-tr to-lightpink from-pink-800"
            />
          </div>

        </div>
      </div>
      <Footer />  
    </div>
  )
}