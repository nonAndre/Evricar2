import { useCallback } from "react";
import AuthUserView from "./AuthUserView";
import WorkerViews from "./WorkerViews";
import useAuthStore from "../zustand/usersManager";

function AuthenticatedView() {
  const { user } = useAuthStore();
  const type = user?.email?.split("@")[1];

  const renderView = useCallback(() => {
    if (type === "dip.evricar.it") {
      return <WorkerViews />;
    } else return <AuthUserView />;
  }, [user]);

  return <div>{renderView()}</div>;
}

export default AuthenticatedView;
