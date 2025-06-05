import React from "react";

const CardTailWind = () => {
  return (
    <div className="relative m-5 w-[400px]">
      <div className="w-[400px] rounded-lg h-[400px]">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQabvlv3A9IEvy1ELgSLj0oMcZoABvIek6gdQ&s"
          alt=""
          className="block w-full h-full object-cover rounded-lg"
        ></img>
      </div>
      <div className="absolute w-[90%] bg-zinc-200  left-1/2 p-5 rounded-[20px] -translate-x-1/2 -translate-y-1/2">
        <div className="grid grid-cols-2 items-center">
          <div className="grid grid-cols-3 items-center ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFcwOVXncMiib5fdrXFPtnNKCtVQIwiopGTA&s"
              alt=""
              className="rounded-[50%] w-10 h-10 mr-3"
            ></img>
            <span>Thang</span>
          </div>

          <div className="text-end">
            <span>❤</span>
            <span>256</span>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-3">
          <span className="font-bold">Hello World</span>
          <span className="text-end font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            2000 SPL
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardTailWind;
