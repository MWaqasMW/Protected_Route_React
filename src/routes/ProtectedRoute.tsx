import React from "react";
import { Navigate } from "react-router-dom";
import Path from "./Path";

interface Props {
  children: React.ReactNode;
  roles: string[];
}

const ProtectedRoute: React.FC<Props> = ({ children, roles }) => {
  const userString = localStorage.getItem("user");
  const user = JSON.parse(userString);

  if (!user) {
    return <Navigate to={Path.LOGIN} />;
  }

  if (!roles.includes(user.role)) {
    if (user.role === "patient") {
      return <Navigate to={Path.PAITIANTMAIN} />;
    } else if (user.role === "provider") {
      return <Navigate to={Path.PROVIDERMAIN} />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;
