import { useCallback } from "react";
import AuthUserView from "./AuthUserView";
import WorkerViews from "./WorkerViews";

function AuthenticatedView() {
  const user = "andrea@utente.evricar.it";
  const type = user.split("@")[1];

  const renderView = useCallback(() => {
    if (type === "utente.evricar.it") {
      return <AuthUserView />;
    }
    if (type === "dip.evricar.it") {
      return <WorkerViews />;
    }
  }, [user]);

  return <div>{renderView()}</div>;
}

export default AuthenticatedView;
