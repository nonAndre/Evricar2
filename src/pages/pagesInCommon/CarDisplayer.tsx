import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import type { Car } from "../../types/car";
import useAuthStore from "../../zustand/usersManager";
import { useState } from "react";

export default function CarDisplayer() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const mail = user?.email;
  const [isOpen, setIsOpen] = useState(false);

  const car: Car = location?.state?.car || {};

  const checkUser = () => {
    if (mail === null || mail === undefined) {
      setIsOpen(true);
    } else {
      navigate("/catalog/carDisplayer/customize", { state: { car: car } });
    }
  };

  console.log(car);

  return (
    <>
      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          ></div>

          <div className="relative bg-white w-2/6 p-6 rounded-lg shadow-lg z-50 flex flex-col justify-between">
            <div>
              <h1 className="font-bold text-lg">
                You can't customize the car if you are not logged in.
              </h1>
            </div>

            <div className="flex flex-row justify-between mt-6">
              <button
                className="cursor-pointer h-10 w-1/3 bg-blue-700 hover:bg-blue-900 rounded text-white"
                onClick={() => setIsOpen(false)}
              >
                <p className="text-xl text-center">Nevermind</p>
              </button>

              <button
                className="cursor-pointer h-10 w-1/3 bg-green-500 hover:bg-green-700 rounded text-white"
                onClick={() => navigate("/login")}
              >
                <p className="text-xl text-center">Login</p>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div className="flex flex-col h-screen bg-blue-900">
        <Header />
        <div className="flex  h-6/7 w-full justify-center ">
          <div className="flex flex-col h-6/7 w-full justify-center items-center">
            <img className="h-180 w-300 object-contain" src={car.photo} />
            <div className="flex flex-col  gap-3 items-center text-4xl text-white  w-full justify-center">
              <div className="flex flex-row gap-1 justify-center">
                <p>{car.name}</p>
                <p>{car.model}</p>
              </div>
              <p className="text-2xl text-white pb-4">
                Price starts from: {car.price} $
              </p>
              <button
                className="border-2 border-green-300 rounded-2xl w-1/5 bg-white text-black cursor-pointer hover:bg-green-300 hover:text-white"
                onClick={() => checkUser()}
              >
                Customize
              </button>
            </div>
          </div>
        </div>
        <div className="flex">
          <img src={car.inside} />
        </div>
      </div>
    </>
  );
}
