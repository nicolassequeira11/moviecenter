import React from "react";

export const PriceComponente = ({title, array}) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl border-b-2 border-darkpink">
        {title}
      </h2>
      <div className="flex mt-2 flex-wrap">
        {array.map((item, index) => (
          <div 
            key={index} 
            className="pt-4"
          >
            <p 
              className="text-xl max-md:border-b-2 max-md:border-darkpink
                max-md:text-center max-md:text-3xl max-md:w-fit max-md:mx-auto max-md:mb-2">
              {item.type}
            </p>
            <div className="flex flex-wrap text-center">
              {item.items.map((item) => (
                <div className="py-2 mx-auto">
                  <div className="py-2 min-w-[12rem] max-w-[12rem]">
                    <div className="">
                      <img 
                        src={item.img} 
                        className="w-[12rem] min-w-[12rem] px-3" 
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
