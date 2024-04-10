import { useEffect, useContext } from "react";
import { Footer } from "./components/Footer";
import { MyAccordion } from "../components/Accordion";
import HelpIcon from '@mui/icons-material/Help';
import { NavContext } from "../context/NavContext";

export const FAQ = () => {
  const { setIsNavClick } = useContext(NavContext);
  
  useEffect(() => {
    setIsNavClick(false);
  }, [])

  const FAQ = [
    {"question": "¿Cómo puedo comunicarme con Movie?", "answer": "Para comunicarte, envianos un mail a contactanos@movie.com.uy o a través de WhatsApp al 095 038 350."},
    {"question": "¿En qué horario funciona el contact center?", "answer": "De lunes a viernes de de 10 a 19 hs; sábados y domingo de 12 a 20 hs."},
    {"question": "¿Se pueden cambiar las entradas de cine?", "answer": "Para realizar el cambio de entradas de cine comunicarse vía WhatsApp hasta media hora antes del comienzo de la función para la cual se compró en primera instancia, luego las mismas quedan vencidas. En caso de querer realizar un cambio fuera de del horario del Contact Center, el cliente deberá concurrir al complejo. *Las entradas de Teatro y Eventos Especiales no tienen cambio."},
    {"question": "¿Las entradas de cine tienen devolución?", "answer": "Sí, la devolución de la compra de entradas de cine se realiza por WhatsApp hasta una hora antes del comienzo de la función para la cual se adquirieron las mismas. Si no se solicita la anulación en el tiempo especificado, las entradas quedan vencidas. El proceso de devolución es únicamente a través del Contact Center. El dinero se reintegra a la tarjeta. *Las entradas de Teatro y Eventos Especiales no tienen devolución."},
    {"question": "Mi hijo tiene 2 años ¿Paga entrada?", "answer": "En cine los menores de 3 años no pagan entrada. Deben estar acompañados por un mayor y sentarse en su falda ya que no pueden ocupar una butaca. Es imprescindible presentar documento de identidad. Con 3 años cumplidos ya abonan entrada."},
    {"question": "Mi hijo tiene 12 años, pero la película es para mayores de 15 ¿Puede verla?", "answer": "Por disposición del INAU los menores pueden ingresar a ver la película acompañados por su padre, madre o tutor. Esto aplica para todas las calificaciones excepto para Restringido + 18. En caso que la película esté calificada como Restringido + 18, ningún menor puede ingresar a verla."},
    {"question": "¿Puedo enviar a mi hijo menor a retirar las entradas a la boletería automática de Movie?", "answer": "Sí. Para imprimir las entradas sólo es necesario ingresar el código de retiro que se asigna al finalizar la transacción en cualquiera de nuestras terminales automáticas o ATMS."},
    {"question": "¿Qué hay que tener en cuenta para ingresar a la sala 4D?", "answer": "El espectador ingresa bajo su propio riesgo. JELSI SA y LUMMA SRL no asumen responsabilidad por cualquier daño o lesión ocasionada por la participación en salas 4D. El equipamiento 4D, con butacas móviles y efectos especiales, puede agravar condiciones médicas preexistentes, causar mareos, dolores de cabeza y/o pérdida del equilibrio. El sistema cuenta con efectos especiales como vibraciones, impacto de aire, agua y olores, y efectos de sala como burbujas, viento y luces estroboscópicas. - Pueden utilizar las salas 4D: personas que midan más de un metro / mayores de 3 años, niños de 3 a 7 con acompañante y bajo supervisión. - El sistema 4D no debe ser utilizado por adultos mayores, personas con alteraciones psíquicas, embarazadas o con bebés o niños que deban estar alzados o en brazos. - Accesibilidad: la sala dispone de lugares específicos para personas en silla de ruedas. - No ingresar a la sala si usted presenta alguna de las siguientes condiciones médicas: problemas cardiacos, presión arterial alta, dolores de cuello, espalda, piernas, antecedentes de episodios epilépticos, alergias. - Normas de seguridad: evite utilizar indumentaria delicada o accesorios que puedan ser afectados por los efectos especiales /Mantenga sus objetos de valor resguardados del posible contacto con los efectos especiales del sistema 4D /No utilice aparatos celulares y/o cámaras fotográficas/ No se permite compartir butacas /Los niños deben sentarse cerca de sus padres o tutores /No acercarse ni tocar los fuelles (parte inferior de los módulos) / Una vez que la función comenzó permanezca sentado en todo momento/ Si precisa salir de la sala manténgase alejado de las butacas en funcionamiento / No se pare sobre los apoya pies /No entre con bebidas calientes/ Utilice los apoya vasos."},
    {"question": "¿Se puede entrar a la sala de cine con alimentos o bebidas adquiridos fuera de Movie?", "answer": "No está permitido el ingreso a las salas con productos que no hayan sido comprados en Movie. Si el cliente compró comida y/o bebida fuera del complejo, le ofrecemos guardarlo durante la función y se lo entregamos una vez finalizada la misma."},
    {"question": "¿Cómo funciona Una sala para vos?", "answer": "Una Sala Para Vos -y tus amigos- es una nueva opción para disfrutar del cine que más te gusta. Elegís una película de la cartelera, invitás a tus amigos y disfrutás del mejor cine con pop y refresco en cualquiera de nuestros complejos a sala cerrada! Por más información escribinos a contactanos@movie.com.uy"},
    {"question": "¿Cuánto tiempo está una película en cartelera?", "answer": "Nuestra programación va de jueves a miércoles y cambia semana a semana, por este motivo no podemos asegurar de forma anticipada hasta cuando estará una película en cartelera."}
  ]

  return(
    <div className="bg-gray2">
      <div className="max-xl:w-11/12 xl:w-8/12 mx-auto pt-16">
        <h2 className="text-white max-md:mx-auto flex py-5 text-4xl max-md:text-2xl max-md:w-11/12">
          <HelpIcon className="my-auto scale-125 me-2" />
          Preguntas frecuentes
        </h2>
        <MyAccordion 
          array={FAQ}
          className="text-lg text-white border-b-2 bg-gray1 px-5 rounded-lg border-opacity-70 border-darkpink mb-6"
          classNameItem="text-gray-200 text-sm mb-3"
        />
      </div>
      <Footer />
    </div>
  )  
}