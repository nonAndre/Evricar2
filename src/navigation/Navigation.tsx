import { useCallback } from "react";
import UnauthenticatedView from "../views/UnauthenticatedView";
import AuthenticatedView from "../views/AuthenticatedView";
import useAuthStore from "../zustand/usersManager";

function Navigation() {
  const { user } = useAuthStore();

  const renderView = useCallback(() => {
    switch (user) {
      case undefined:
        return <div />;
      case null:
        return <UnauthenticatedView />;
      default:
        return <AuthenticatedView />;
    }
  }, [user]);

  return <div>{renderView()}</div>;
}

export default Navigation;
