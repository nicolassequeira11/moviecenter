import React from "react";

export const PriceComponente = ({title, array}) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl md:text-3xl border-b-2 border-darkpink">
        {title}
      </h2>
      <div className="mt-2 flex-wrap md:grid max-md:flex lg:flex">
        {array.map((item, index) => (
          <div 
            key={index} 
            className="pt-4"
          >
            <p 
              className="max-md:border-b-2 max-md:border-darkpink
                max-md:text-center max-md:text-3xl md:text-4xl lg:text-xl md:mb-2 max-md:w-fit max-md:mx-auto max-md:mb-2">
              {item.type}
            </p>
            <div className="flex flex-wrap text-center">
              {item.items.map((item) => (
                <div className="py-2 mx-auto">
                  <div className="py-2 min-w-[12rem] max-w-[12rem] max-md:min-w-[11rem] max-md:max-w-[11rem]">
                    <div className="">
                      <img 
                        src={item.img} 
                        className="w-[12rem] min-w-[12rem] max-md:w-[11rem] max-md:min-w-[11rem] px-3 max-md:px-1" 
                      />
                    </div>
                    <p className="text-lg my-3 font-semibold">
                      ${item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
