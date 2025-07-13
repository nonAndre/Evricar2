import { useState } from "react";
import logo from "../../Image/Logo1.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/firebaseConfig";
import useAuthStore from "../../zustand/usersManager";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useAuthStore();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch(() => {
        console.error("Not logged in");
      });
  };

  return (
    <div className="flex h-screen bg-blue-900 justify-center items-center">
      <div className="flex flex-col w-3/6 h-9/12  rounded-2xl  items-center bg-white max-md:w-4/6 ">
        <div className="flex justify-center h-5/12 w-3/5 max-sm:w-full">
          <img src={logo} className="w-5/12" />
        </div>
        <div className="flex flex-col  w-full h-7/12 gap-9 px-5">
          <p className="flex px-4 pt-5 text-2xl text-green-400 font-bold">
            Login
          </p>
          <input
            placeholder="Email"
            className=" flex border-b-2 pt-5 border-gray-300   px-4"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            className="flex border-b-2 pt-5 border-gray-300  px-4"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col h-2/3 w-full justify-center px-4">
          <button
            className="flex w-full justify-center bg-green-400 items-center rounded-2xl px-4 h-1/4 cursor-pointer hover:bg-green-500"
            onClick={() => handleLogin()}
          >
            <p className="text-black text-lg">Login</p>
          </button>
          <div className="flex justify-end px-4 pt-3 gap-2">
            <p className="text-gray-500 text-lg   ">Non sei registrato?</p>
            <button
              className="text-blue-500 text-lg hover:border-b-2 cursor-pointer "
              onClick={() => navigate("/signUp")}
            >
              Registrati
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
