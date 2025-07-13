import { Route, Routes } from "react-router-dom";
import WorkerHome from "../pages/auth/workerViews/WorkerHome";

export default function WorkerViews() {
  const SwithRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<WorkerHome />} />
      </Routes>
    );
  };

  return (
    <div>
      <SwithRoutes />
    </div>
  );
}
