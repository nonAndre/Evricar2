import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import cars from "../../data/cars";
import { useState } from "react";

export default function CatalogDisplayer() {
  const location = useLocation();
  const navigate = useNavigate();
  const initialBrand = location?.state?.name || "Audi";
  const [brandToDisplay, setBrandToDisplay] = useState(initialBrand);

  const buttons = [
    "Audi",
    "Lamborghini",
    "Mercedes",
    "Mustang",
    "Renault",
    "Tesla",
  ];

  const filteredCars = cars.filter((car) => car.name === brandToDisplay);

  return (
    <div className="flex flex-col min-h-screen bg-blue-900">
      <Header />

      <div className="bg-white py-3 px-5">
        <div className="flex flex-row gap-3 justify-between items-center overflow-x-auto whitespace-nowrap">
          {buttons.map((brand, index) => (
            <button
              key={index}
              onClick={() => setBrandToDisplay(brand)}
              className={`cursor-pointer px-4 py-2 rounded-md flex-shrink-0
          ${brandToDisplay === brand ? "bg-green-300" : "hover:bg-gray-200"}`}
            >
              <p className="text-lg font-medium">{brand}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 px-4 mt-6">
        <p className="text-4xl text-green-400 font-bold">{brandToDisplay}</p>

        <div className="flex flex-wrap gap-6 mt-4">
          {filteredCars.map((car, index) => (
            <button
              key={index}
              className="flex flex-col items-center bg-white rounded-2xl hover:bg-gray-200 p-4 w-56 justify-center shadow cursor-pointer"
              onClick={() => navigate("/carDisplayer", { state: { car: car } })}
            >
              <img
                src={car.photo}
                alt={`${car.name} ${car.model}`}
                className="h-27 object-contain mb-2"
              />
              <div className="flex flex-row gap-2 items-center">
                <p className="text-lg">{car.name}</p>
                <p className="text-lg">{car.model}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
