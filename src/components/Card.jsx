import starFill from "../assets/Star_fill.svg";
import star from "../assets/Star.svg";

function Card({ name, image, price, rating, votes, popular, available }) {
  return (
    <div className="relative space-y-2">
      {popular && (
        <span className="absolute top-4 left-2 bg-[#F6C768] text-[#111315] px-2 py-0.5 rounded-full text-[0.625rem] font-bold">
          Popular
        </span>
      )}

      <img className=" rounded-xl" src={image} alt={name} />

      <div className="flex justify-between items-center">
        <p className="text-[0.875rem]">{name}</p>
        <p className="bg-[#BEE3CC] rounded-md px-2 py-0.5 text-black font-bold text-[0.75rem]">
          {price}
        </p>
      </div>
      <div className="flex gap-1 text-[0.875rem] items-center">
        {votes !== 0 ? (
          <>
            <img src={starFill} alt="star" />
            <span>{rating}</span>
            <span className="text-[#6F757C] font-semibold ">
              ({votes} votes)
            </span>
          </>
        ) : (
          <>
            <img src={star} alt="star" />
            <span className="text-[#6F757C] font-semibold">No ratings</span>
          </>
        )}

        {!available && (
          <span className="text-[#ED735D] font-bold ml-auto">Sold out</span>
        )}
      </div>
    </div>
  );
}

export default Card;
