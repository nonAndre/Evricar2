import { useLocation, useNavigate } from "react-router-dom";
import useAuthStore from "../../../zustand/usersManager";

export default function CustomizeCar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const mail = user?.email;
  return <div>CustomizeCar</div>;
}
