import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import cars from "../../data/cars";

export default function CatalogDisplayer() {
  const location = useLocation();
  const navigate = useNavigate();
  const name = location?.state?.name || "";
  const data = cars.filter((e) => e.name === name);

  return (
    <div className="flex flex-col  h-screen bg-blue-900">
      <Header />
      <div className="flex flex-row gap-4">
        {data.map((item, index) => (
          <button
            key={index}
            className="flex flex-col items-center w-4/12 h-full cursor-pointer bg-white rounded-2xl hover:bg-gray-300"
            onClick={() => console.log("asda")}
          >
            <img src={item.photo} className="w-5/12 h-4/5 pt-2" />
            <p>{item.name}</p>
            <p>{item.height}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
