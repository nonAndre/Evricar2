import { Routes, Route } from "react-router-dom";
import Login from "../pages/unauth/Login";
import SignUp from "../pages/unauth/SignUp";
import HomePage from "../pages/pagesInCommon/HomePage";

function UnauthenticatedView() {
  const SwithRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
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
