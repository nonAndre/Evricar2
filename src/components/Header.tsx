import { useState } from "react";
import useAuthStore from "../zustand/usersManager";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Firebase/firebaseConfig";
import { useQuery } from "@tanstack/react-query";
import type { ReadyOrdersResult, UsersOrders } from "../types/car";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";

export default function Header() {
  const { user, setUser } = useAuthStore();
  const name = user?.email?.split("@")[0];
  const type = user?.email?.split("@")[1];
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const fetchCars = async () => {
    let ordini: any = [];
    const q = query(
      collection(db, "Archive"),
      where("idUser", "==", user?.uid),
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      ordini.push({ ...doc.data(), id: doc.id });
    });

    return ordini;
  };

  function getReadyOrders(data: UsersOrders[] | undefined): ReadyOrdersResult {
    if (!data || data.length === 0) {
      return { hasReadyOrders: false, readyOrders: [] };
    }

    const readyOrders = data
      .flatMap((user) => user.orders)
      .filter((order) => order.isReady === true);

    return {
      hasReadyOrders: readyOrders.length > 0,
      readyOrders,
    };
  }

  const { data } = useQuery({
    queryKey: ["archive"],
    queryFn: fetchCars,
  });

  const { hasReadyOrders } = getReadyOrders(data);

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  const switchAccount = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <>
      {isOpen ? (
        <div className="fixed inset-0 z-50 flex justify-end pt-20 px-4">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          ></div>

          <div className="relative  w-3/10 h-3/5 p-6 rounded-lg shadow-lg z-50 flex flex-col  bg-white max-md:w-3/5">
            <div className="flex justify-end w-full h-1/11  items-center">
              <button
                className="flex h-10 w-10 hover:bg-gray-200 justify-center items-center rounded-2xl cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <IoMdClose size={28} />
              </button>
            </div>
            <div className="flex justify-center w-full h-1/11  items-center pt-10 ">
              <div className="flex items-center justify-center w-15 h-15 rounded-full  text-white border-2 border-green-900 font-bold text-lg  bg-green-900">
                {name?.charAt(0).toUpperCase()}
              </div>
            </div>
            <div className="flex items-center justify-center pt-9">
              {user?.email}
            </div>
            <div className="flex items-center justify-center h-4/12 ">
              <div className="flex rounded-2xl justify-between  h-1/2 w-full gap-3 max-sm:flex-col">
                <div
                  className="flex w-1/2 flex-row items-center gap-2 justify-center cursor-pointer border-2 border-gray-300 hover:bg-gray-300 rounded-2xl max-sm:w-full"
                  onClick={() => switchAccount()}
                >
                  <IoMdAdd size={30} />
                  <p className="text-xl max-lg:text-sm">Add another account</p>
                </div>
                <div
                  className="flex w-1/2 flex-row items-center gap-2 justify-center hover:bg-gray-300 cursor-pointer border-2 border-gray-300 rounded-2xl max-sm:w-full"
                  onClick={() => logout()}
                >
                  <IoIosLogOut size={30} />
                  <p className="text-xl max-lg:text-sm">Logout</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <div className="flex sticky bpttom-0 z-50 w-full min-h-[5rem] sm:min-h-[4rem] items-center px-4 justify-between bg-white ">
        <div className="flex h-full items-center  w-1/2">
          <p className="font-tesla text-4xl text-green-400">Evricar</p>
        </div>

        {name === undefined || name === null ? (
          <div className="flex  h-full items-center justify-end  w-1/2">
            <div className="flex w-10 h-10  items-center justify-center hover:bg-gray-200 rounded-full">
              <CgProfile
                size={28}
                onClick={() => navigate("/Login")}
                className="cursor-pointer hover:bg-gray-200 rounded-full"
              />
            </div>
          </div>
        ) : (
          <div className="flex  h-full items-center justify-end  w-1/2 gap-3">
            {type !== "dip.evricar.it" ? (
              <button
                className={`flex justify-center  ${
                  hasReadyOrders
                    ? "w-1/12 border-2  border-green-400 text-white bg-green-400 hover:bg-green-500"
                    : "w-1/12 text-black bg-white hover:bg-gray-200 "
                } max-sm:w-1/3  font-bold items-center rounded-2xl cursor-pointer  hover:text-white`}
                onClick={() => navigate("/showOrders")}
              >
                {hasReadyOrders ? (
                  <div className="flex items-center w-10 h-10 justify-center ">
                    <MdOutlineNotificationsActive size={30} color="white" />
                  </div>
                ) : (
                  <div className="flex items-center w-10 h-10 justify-center ">
                    <FiShoppingCart size={30} color="black" />
                  </div>
                )}
              </button>
            ) : (
              <div></div>
            )}

            <button
              className="flex items-center justify-center w-10 h-10 rounded-full  text-white border-2 border-green-900 font-bold text-lg hover:bg-green-400 hover:border-green-400 hover:text-white bg-green-900 cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              {name.charAt(0).toUpperCase()}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
