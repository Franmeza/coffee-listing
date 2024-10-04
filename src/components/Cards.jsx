import Card from "./Card";

function Cards({ coffeeList }) {
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-10 justify-center items-center ">
      {coffeeList.map((coffe) => (
        <Card
          key={coffe.id}
          name={coffe.name}
          image={coffe.image}
          price={coffe.price}
          rating={coffe.rating}
          votes={coffe.votes}
          popular={coffe.popular}
          available={coffe.available}
        />
      ))}
    </div>
  );
}

export default Cards;
