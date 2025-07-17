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

export default function CustomizeCar() {
  const location = useLocation();
  const car: Car = location?.state?.car || {};
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const mail = user?.email;
  const [cost, setCost] = useState(car.price);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [customization, setCustomization] = useState<CustomizationOptions>({
    color: selectedColor,
    seat: selectedSeat,
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
      where("idUser", "==", user?.uid)
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

          <div className="relative bg-white w-2/6 p-6 rounded-lg shadow-lg z-50 flex flex-col justify-between">
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
                className="cursor-pointer h-10 w-1/3 bg-blue-700 hover:bg-blue-900 rounded text-white"
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
      <div className="flex flex-col  h-screen bg-blue-900">
        <Header />
        <div className="flex flex-row h-full">
          <div className="flex flex-col h-full w-1/2 px-4 text-white text-2xl">
            <img className="h-180 w-300 object-contain" src={car.photo} />
            <p>Height: {car.height} m</p>
            <p>Width:{car.width} m</p>
            <p>Lenght: {car.length} m</p>
          </div>
          <div className="flex flex-col h-full w-1/2 border-4 border-green-400 rounded-2xl bg-white px-4 gap-4 justify-between py-4">
            <div className="flex flex-row h-1/12 items-center px-4 text-3xl gap-2 text-black font-bold w-full ">
              <p>{car.name}</p>
              <p>{car.model}</p>
            </div>
            <p className="px-4 text-xl pb-3">Current price: {cost} $</p>
            <div className="flex flex-col h-2/12 w-full justify-center shadow-lg rounded-2xl text-xl bg-gray-100 items-center ">
              <p className="pb-3 px-4">Choose your color</p>
              <div className="flex flex-row w-full gap-3 items-center justify-center  ">
                {colors.map((item, index) => (
                  <button
                    key={index}
                    className={` w-15 h-15 rounded border-6 border-gray-400 cursor-pointer  ${
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
            </div>
            <div className="flex flex-col h-4/12 w-full shadow-lg rounded-2xl text-xl bg-gray-100 items-center">
              <p className="pb-3 px-4 text-xl">Choose your seat</p>
              <div className="flex flex-row w-full gap-4 items-center justify-center px-4 flex-wrap">
                {sedili.map((item, index) => (
                  <button
                    key={index}
                    className={`h-48 w-72 border-4 rounded-xl cursor-pointer overflow-hidden
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

            <button
              className="flex h-1/15 justify-center items-center bg-green-400 text-white font-bold text-2xl hover:bg-green-600 cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              Save and send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
