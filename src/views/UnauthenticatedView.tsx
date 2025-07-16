import { Routes, Route } from "react-router-dom";
import Login from "../pages/unauth/Login";
import SignUp from "../pages/unauth/SignUp";
import HomePage from "../pages/pagesInCommon/HomePage";
import CatalogDisplayer from "../pages/pagesInCommon/CatalogDisplayer";
import CarDisplayer from "../pages/pagesInCommon/CarDisplayer";

function UnauthenticatedView() {
  const SwithRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogDisplayer />} />
        <Route path="/catalog/carDisplayer" element={<CarDisplayer />} />
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
