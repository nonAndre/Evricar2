import { useState } from "react";
import useAuthStore from "../zustand/usersManager";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { user, setUser } = useAuthStore();
  const name = user?.email?.split("@")[0];
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    setUser(null);
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
                You are about to logout. Are you sure?
              </h1>
            </div>

            <div className="flex flex-row justify-between mt-6">
              <button
                className="cursor-pointer h-10 w-1/3 bg-blue-700 hover:bg-blue-900 rounded text-white"
                onClick={() => setIsOpen(false)}
              >
                <p className="text-xl text-center">No</p>
              </button>

              <button
                className="cursor-pointer h-10 w-1/3 bg-green-500 hover:bg-green-700 rounded text-white"
                onClick={() => logout()}
              >
                <p className="text-xl text-center">Yes</p>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div className="flex sticky top-0 z-50 w-full min-h-[6rem] sm:min-h-[5rem] items-center px-4 justify-between bg-white shadow-md">
        <div className="flex h-full items-center  w-1/2">
          <p className="font-bold text-3xl text-green-400">Evricar</p>
        </div>

        {name === undefined || name === null ? (
          <div className="flex  h-full items-center justify-end  w-1/2">
            <button
              className="flex justify-center text-black w-1/6 max-sm:w-1/3 border-2 border-blue-900 font-bold items-center rounded-2xl cursor-pointer hover:bg-blue-900 hover:text-white"
              onClick={() => navigate("/Login")}
            >
              <p className="flex">Login</p>
            </button>
          </div>
        ) : (
          <div className="flex  h-full items-center justify-end  w-1/2 gap-3">
            <button
              className="flex justify-center text-black w-1/6 max-sm:w-1/3 border-2 border-red-900 font-bold items-center rounded-2xl cursor-pointer hover:bg-red-900 hover:text-white"
              onClick={() => setIsOpen(true)}
            >
              <p className="flex">Logout</p>
            </button>
            <button className="flex justify-center text-black w-1/6 max-sm:w-1/3 border-2 border-blue-900 font-bold items-center rounded-2xl cursor-pointer hover:bg-blue-900 hover:text-white">
              <p className="flex">{name}</p>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
