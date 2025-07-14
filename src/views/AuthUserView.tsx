import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/pagesInCommon/HomePage";

export default function AuthUserView() {
  const SwithRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    );
  };

  return (
    <div>
      <SwithRoutes />
    </div>
  );
}
