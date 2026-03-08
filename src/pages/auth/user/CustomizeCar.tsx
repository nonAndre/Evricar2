import { useLocation, useNavigate } from "react-router-dom";
import useAuthStore from "../../../zustand/usersManager";
import Header from "../../../components/Header";
import type { Car, CustomizationOptions, Orders } from "../../../types/car";
import colors from "../../../data/colors";
import { useState } from "react";
import sedili from "../../../data/sedili";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../../Firebase/firebaseConfig";
import cerchi from "../../../data/cerchi";

export default function CustomizeCar() {
  const location = useLocation();
  const car: Car = location?.state?.car || {};
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const mail = user?.email;
  const [cost, setCost] = useState(car.price);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);
  const [selectedCircle, setSelectedCircle] = useState<string | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [customization, setCustomization] = useState<CustomizationOptions>({
    color: selectedColor,
    seat: selectedSeat,
    circle: selectedCircle,
  });

  const randomString = (length: number) =>
    Math.random()
      .toString(36)
      .slice(2, 2 + length);

  const sendProject = async () => {
    const request: Orders = {
      idOrder: randomString(15),
      brand: car.name,
      model: car.model,
      optional: customization,
      price: cost,
      photo: car.photo,
      isReady: false,
    };

    const q = query(
      collection(db, "Archive"),
      where("idUser", "==", user?.uid),
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      const newDocRef = doc(collection(db, "Archive"));
      await setDoc(newDocRef, {
        idUser: user?.uid,
        mail: mail,
        userName: mail?.split("@")[0],
        orders: [request],
      })
        .then(() => {
          console.log("Libro aggiunto con successo");
          navigate("/");
        })
        .catch(() => {
          console.error("Errore nella creazione del documento");
        });
    } else {
      const docRef = querySnapshot.docs[0].ref;
      const docData = querySnapshot.docs[0].data();

      const existingOrders = Array.isArray(docData.orders)
        ? docData.orders
        : [];

      const updatedOrders = [...existingOrders, request];

      await updateDoc(docRef, {
        ...docData,
        orders: updatedOrders,
      })
        .then(() => {
          navigate("/");
        })
        .catch(() => {
          console.error("Errore nell'inserimento ");
        });
    }
  };

  return (
    <>
      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          ></div>

          <div className="relative bg-white w-2/6 p-6 rounded-lg shadow-lg z-50 flex flex-col justify-between max-md:w-4/6 max-sm:w-6/7">
            <div>
              <h1 className="font-bold text-lg">
                You successfully create you car. Press "Send" to send the
                project
              </h1>
              <p className=" text-lg pt-3">
                You will be redirected to the home page after sending the
                project
              </p>
            </div>

            <div className="flex flex-row justify-between mt-6">
              <button
                className="cursor-pointer h-10 w-1/3 bg-blue-700 hover:bg-blue-900 rounded text-white max-sm:w-2/5"
                onClick={() => setIsOpen(false)}
              >
                <p className="text-xl text-center">Nevermind</p>
              </button>

              <button
                className="cursor-pointer h-10 w-1/3 bg-green-500 hover:bg-green-700 rounded text-white"
                onClick={() => sendProject()}
              >
                <p className="text-xl text-center">Send</p>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div className="flex flex-col min-h-screen bg-white relative pb-24">
        {" "}
        <Header />
        <div className="fixed bottom-0 z-30 w-full justify-between border-t-2 border-gray-300 bg-white flex h-24 px-4 max-sm:flex-col">
          {" "}
          <div className="flex flex-row items-center px-4 text-2xl gap-2 max-sm:px-2">
            <p className="text-ellipsis">{car.name}</p>
            <p>{car.model}</p>
          </div>
          <div className="flex flex-row items-center justify-center px-4  text-2xl gap-6 max-sm:items-start max-sm:px-0  max-sm:pb-4 max-sm:gap-5">
            <div className="flex flex-col ">
              <p className="text-gray-400 max-sm:hidden">Total price</p>
              <p>{cost}$</p>
            </div>

            <button
              className="flex h-1/3 justify-center items-center bg-green-400 text-white font-bold text-2xl hover:bg-green-600 cursor-pointer px-4 max-sm:h-3/4 max-sm:self-center"
              onClick={() => setIsOpen(true)}
            >
              Save and send
            </button>
          </div>
        </div>
        <div className="flex flex-row h-full max-xl:flex-col w-full ">
          <div className="flex flex-col   items-center px-4 py-8 w-2/3 ">
            <div className="w-5/6 max-w-6xl">
              <img
                src={car.photo}
                className="w-full h-full object-contain"
                alt={`${car.name} technical view`}
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center w-full max-w-4xl">
              <div>
                <h2 className="text-sm text-gray-500">Horsepower</h2>
                <p className="text-3xl max-sm:text-2xl">{car.horsePower} CV</p>
              </div>
              <div>
                <h2 className="text-sm text-gray-500">Width</h2>
                <p className="text-3xl max-sm:text-2xl">{car.width} m</p>
              </div>
              <div>
                <h2 className="text-sm text-gray-500">Height</h2>
                <p className="text-3xl max-sm:text-2xl">{car.height} m</p>
              </div>
              <div>
                <h2 className="text-sm text-gray-500">Length</h2>
                <p className="text-3xl max-sm:text-2xl">{car.length} m</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full max-xl:w-full w-1/3 border-l-2 border-gray-300 px-4 overflow-y-scroll">
            <div className="flex flex-col w-full h-full">
              <p className="text-3xl py-4">Available Colors</p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center w-full max-w-4xl pt-6">
                {colors.map((item, index) => (
                  <button
                    key={index}
                    className={` w-15 h-15 rounded-full border-4 border-gray-400 cursor-pointer  ${
                      item.colorClass
                    } ${
                      selectedColor === item.color ? "border-green-400" : ""
                    } hover:border-green-500`}
                    onClick={() => {
                      setCost(car.price + item.price);
                      setSelectedColor(item.color);
                      setCustomization((prev) => ({
                        ...prev,
                        color: item.color,
                      }));
                    }}
                  ></button>
                ))}
              </div>

              <div className="flex flex-col h-2/5 w-full py-8 ">
                <p className="text-3xl">Available Seats</p>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-6 text-center w-full  pt-6">
                  {sedili.map((item, index) => (
                    <button
                      key={index}
                      className={`h-48 w-70 border-4 rounded-xl cursor-pointer overflow-hidden
                                ${
                                  selectedSeat === item.name
                                    ? "border-green-400"
                                    : "border-gray-400 hover:border-green-400"
                                }`}
                      onClick={() => {
                        setCost(car.price + item.price);
                        setSelectedSeat(item.name);
                        setCustomization((prev) => ({
                          ...prev,
                          seat: item.name,
                        }));
                      }}
                    >
                      <img
                        src={item.Path}
                        alt={item.name}
                        className="object-cover h-full w-full"
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col h-2/4 w-full  ">
                <p className="text-3xl">Circles</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center w-full max-w-4xl ">
                  {cerchi.map((item, index) => (
                    <button
                      className={` w-24 h-25 rounded-full cursor-pointer ${
                        selectedCircle === item.name
                          ? "border-4 border-green-400"
                          : "border-4 border-gray-400 hover:border-green-400"
                      }`}
                      key={index}
                      onClick={() => {
                        setCost(car.price + item.price);
                        setSelectedCircle(item.name);
                        setCustomization((prev) => ({
                          ...prev,
                          circle: item.name,
                        }));
                      }}
                    >
                      <img src={item.Path} className="object-contain" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
