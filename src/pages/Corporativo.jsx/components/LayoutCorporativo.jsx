import { FadeCarousel } from "../../../components/Carousel"

export const LayoutCorporativo = ({ array, positionX, img, showCarousel, title, logo }) => {
  return(
    <div className="relative">
      <img 
        src={img} 
        className="h-[35rem] w-full object-cover opacity-60" 
      />
      <div 
        className={`max-md:w-[80vw] md:w-4/12 lg:w-3/12 mx-auto absolute -bottom-[22%] ${positionX} z-10`}
      >
        <div className="flex text-white w-full justify-center py-2 z-10">
          <img src={logo} className="h-7" />
          <p className="text-2xl px-2 font-bold text-center">{title}</p>
          <img src={logo} className="h-7" />
        </div>
        {showCarousel ? <FadeCarousel array={array} /> : null}
      </div>
    </div>
  )
}