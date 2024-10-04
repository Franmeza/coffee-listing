import { useEffect, useState } from "react";
import { getCoffeeList } from "./api-requests/getCoffees";
import "./App.css";
import Container from "./components/Container";
import Header from "./components/Header";

function App() {
  const [coffees, setCoffees] = useState([]);
  const [fullCoffeeList, setFullCoffeeList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coffeeList = await getCoffeeList();
        setFullCoffeeList(coffeeList); // Cache the full coffee list
        setCoffees(coffeeList); // Initialize state with the full list
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  const filterProducts = (filter) => {
    if (filter === "all") {
      setCoffees(fullCoffeeList); // Reset to full list from cache
    } else if (filter === "available") {
      setCoffees(fullCoffeeList.filter((coffee) => coffee.available === true)); // Filter from cached full list
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 relative z-10">
        <Container coffeeList={coffees} filter={filterProducts} />
      </div>
    </div>
  );
}

export default App;
