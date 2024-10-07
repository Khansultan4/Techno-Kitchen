// import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
  authUser,
  redirectTo,
}: {
  children: JSX.Element;
  authUser: string | undefined;
  redirectTo: string;
}): JSX.Element {
  if (authUser) {
    return <Navigate to={redirectTo} replace />;
  } else {
    return children;
  }
}
