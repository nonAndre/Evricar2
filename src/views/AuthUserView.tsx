import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/pagesInCommon/HomePage";
import CatalogDisplayer from "../pages/pagesInCommon/CatalogDisplayer";
import CarDisplayer from "../pages/pagesInCommon/CarDisplayer";
import CustomizeCar from "../pages/auth/user/CustomizeCar";

export default function AuthUserView() {
  const SwithRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogDisplayer />} />
        <Route path="/carDisplayer" element={<CarDisplayer />} />
        <Route path="/customize" element={<CustomizeCar />} />
      </Routes>
    );
  };

  return (
    <div>
      <SwithRoutes />
    </div>
  );
}
