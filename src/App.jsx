import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  console.log(coffees);
  return (
    <div className="m-5 md:m-10">
      <h1 className="text-6xl text-purple-600 text-center my-6">
        Our Popular Products
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 px-10 gap-5">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
