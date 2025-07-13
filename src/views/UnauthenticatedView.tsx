import { Routes, Route } from "react-router-dom";
import Login from "../pages/unauth/Login";
import SignUp from "../pages/unauth/SignUp";

function UnauthenticatedView() {
  const SwithRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    );
  };

  return (
    <div>
      <SwithRoutes />
    </div>
  );
}

export default UnauthenticatedView;
