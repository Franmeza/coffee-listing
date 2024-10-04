import { useState } from "react";

function Buttons({ onFilter }) {
  const [activeFilter, setActiveFilter] = useState("all");

  //Function to change the class of the button depending on filter applied
  const buttonClass = (filter) =>
    activeFilter === filter
      ? "bg-[#6F757C] rounded-md px-3 py-1"
      : "rounded-md px-3 py-1";

  return (
    <div className="space-x-4 text-[0.875rem]">
      <button
        className={buttonClass("all")}
        onClick={() => {
          onFilter("all");
          setActiveFilter("all");
        }}
      >
        All Products
      </button>
      <button
        className={buttonClass("available")}
        onClick={() => {
          onFilter("available");
          setActiveFilter("available");
        }}
      >
        Available Now
      </button>
    </div>
  );
}

export default Buttons;
