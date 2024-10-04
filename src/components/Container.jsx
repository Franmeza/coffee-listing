import React from "react";
import Cards from "./Cards";
import Buttons from "./Buttons";
import vector from "../assets/vector.svg";

function Container({ coffeeList, filter }) {
  return (
    <main className="text-[#FEF7EE] flex flex-col justify-center items-center bg-[#1B1D1F] sm:max-w-[420px] md:max-w-[1080px]  p-6 -mt-[165px] gap-5  mx-auto mb-32 rounded-xl">
      <img
        className="absolute top-20 left-1/2 -translate-x-6  -translate-y-1/2 mt-5 mx-auto"
        src={vector}
        alt="vector"
      />
      <h1 className="text-[2rem] font-semibold mt-10 relative z-10]">
        Our Collection
      </h1>
      <p className="text-center text-[#6F757C] z-10 max-w-[450px] text-[1rem]">
        Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
      </p>
      <Buttons onFilter={filter} />

      <Cards coffeeList={coffeeList} />
    </main>
  );
}

export default Container;
