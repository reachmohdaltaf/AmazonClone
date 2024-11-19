// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
function Card({ title, link1, link2, link3, link4, pages }) {
  return (
    <div className="flex flex-col gap-5 bg-white p-5 w-full md:w-[48%] lg:w-[23%] relative top-0 md:top-[350px]">
      {/* Title */}
      <div className="h-15">
        <h3 className="  h-[100px]  text-2xl font-semibold">{title}</h3>
      </div>
      {/* Images Section */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-3  h-2/5">
        <div className="flex flex-col items-center">
          <img
            src={link1}
            alt="Item 1"
            className="h-[80px] w-[80px] md:h-[120px] md:w-[150px]"
          />
          <p className="text-xs md:text-sm text-center">
            Cushion covers, bedsheets & more
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={link2}
            alt="Item 2"
            className="h-[70px] w-[70px] md:h-[120px] md:w-[150px]"
          />
          <p className="text-xs md:text-sm text-center">
            Figurines, vases & more
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={link3}
            alt="Item 3"
            className="h-[70px] w-[70px] md:h-[120px] md:w-[150px]"
          />
          <p className="text-xs md:text-sm text-center">
            Cushions, bedsheets & more
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={link4}
            alt="Item 4"
            className="h-[70px] w-[70px] md:h-[120px] md:w-[150px]"
          />
          <p className="text-xs md:text-sm text-center">
            Cushions, bedsheets & more
          </p>
        </div>
      </div>
      {/* Explore All */}
      <div className="w-11/12 text-center">
        <a
          href={pages}
          className="text-[#007185] no-underline text-sm md:text-base"
        >
          Explore All
        </a>
      </div>
    </div>
  );
}

export default Card;
