import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const AuthenticationPage = React.lazy(() => import("./pages/auth/Login"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        element={
          <React.Suspense fallback={null}>
            <AuthenticationPage />
          </React.Suspense>
        }
        path="/login"
      />
    </Routes>
  );
};

export default AppRoutes;
