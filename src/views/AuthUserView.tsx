import { Route, Routes } from "react-router-dom";
import UserHome from "../pages/auth/userViews/UserHome";

export default function AuthUserView() {
  const SwithRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<UserHome />} />
      </Routes>
    );
  };

  return (
    <div>
      <SwithRoutes />
    </div>
  );
}
