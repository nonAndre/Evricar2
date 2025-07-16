import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/pagesInCommon/HomePage";
import CatalogDisplayer from "../pages/pagesInCommon/CatalogDisplayer";
import CarDisplayer from "../pages/pagesInCommon/CarDisplayer";
import CustomizeCar from "../pages/auth/user/CustomizeCar";
import ShowOrders from "../pages/auth/user/ShowOrders";

export default function AuthUserView() {
  const SwithRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />{" "}
        <Route path="/showOrders" element={<ShowOrders />} />
        <Route path="/catalog" element={<CatalogDisplayer />} />
        <Route path="/catalog/carDisplayer" element={<CarDisplayer />} />
        <Route
          path="/catalog/carDisplayer/customize"
          element={<CustomizeCar />}
        />
      </Routes>
    );
  };

  return (
    <div>
      <SwithRoutes />
    </div>
  );
}
