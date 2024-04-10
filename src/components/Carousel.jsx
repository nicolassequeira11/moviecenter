import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

export const Carousel = ({array}) => {
  var settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className:"overflow-hidden",
  };
  
  return (
    <Slider {...settings}>
      {array.map((item, index) => (
        <div 
          key={index} 
          className="relative"
        >
          <img 
            src={item.img} 
            className="h-[39rem] mx-auto object-cover w-full flex" 
          />
          <h2 
            className="text-white font-bold text-6xl absolute z-10 top-[84%] ms-10"
          >
            {item.name}
          </h2>
          <div className="h-[39rem] absolute bg-gradient-to-t from-black to-40% to-transparent top-0 left-0 right-0 bottom-0"></div>
        </div>
      ))}
    </Slider>
  );
}

export const CarouselMovies = ({array, handleMovieSelected}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleNavigate = () => {
    navigate("/info");
  }

  const settings = {
    className: "",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 8,
    slidesToScroll: 8,
    speed: 250,
    responsive: [
      {
        breakpoint: 1500, 
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
        }
      },
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        }
      },
      {
        breakpoint: 1280, 
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      },
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      },
      {
        breakpoint: 950, 
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 800, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 640, 
        settings: {
          arrows: false,
          className: "mx-auto",
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
    ]
  };
  
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {array.map((item, index) => (
          <div 
            key={index} 
            onClick={()=> {handleMovieSelected(item); handleNavigate();}}
          >
            <div 
              className="h-60 w-40 rounded-lg overflow-hidden mx-auto relative cursor-pointer" 
              onMouseEnter={()=> handleMouseEnter(index)} 
              onMouseLeave={handleMouseLeave}
            >
              <img 
                src={item.img} 
                className="h-60 w-40 rounded-lg object-cover hover:scale-125 transition duration-500 ease-out" 
              />
              {item.date &&
                <div 
                  className={`bg-darkpink bg-opacity-50 py-1 text-center text-white w-full top-[40%] 
                  ${hoveredIndex === index ? "hidden" : "absolute"} `}
                >
                  <p 
                    className=""
                  >
                    ESTRENO
                  </p>
                  <p 
                    className="font-bold text-xl"
                  >
                    {item.date}
                  </p>
                </div>
              }
            </div>
            <p 
              className="text-gray-200 text-sm text-center px-2 pt-2"
            >
              {item.title}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export const FadeCarousel = ({ array }) => {

  const settings = {
    fade: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 3000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };

  return (
    <div className="slider-container border-4 border-darkpink bg-gray1">
      <Slider {...settings}>
        {array.map((item, index) => (
          <div key={index} className="h-[15rem] w-[22rem]">
            <img src={item.img} className="h-[16rem] object-cover" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

