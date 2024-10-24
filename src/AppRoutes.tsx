import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateOutlet from "./utils/PrivateOutlet";
import LoadingSpinner from "./components/LoadingSpinner";

const AuthenticationPage = React.lazy(() => import("./pages/auth/Login"));
const MainLayout = React.lazy(() => import("./pages/dashboard/MainLayout"));
const Kpi = React.lazy(() => import("./pages/dashboard/components/kpi"));
const Products = React.lazy(
  () => import("./pages/dashboard/components/products")
);
const Articles = React.lazy(
  () => import("./pages/dashboard/components/articles")
);
const VistedProducts = React.lazy(
  () => import("./pages/dashboard/components/productsVisited")
);
const Users = React.lazy(() => import("./pages/dashboard/components/users"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <AuthenticationPage />
          </React.Suspense>
        }
        path="/login"
      />
      <Route
        path="/"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <PrivateOutlet />
          </React.Suspense>
        }
      >
        <Route
          element={
            <React.Suspense fallback={<LoadingSpinner />}>
              <MainLayout />
            </React.Suspense>
          }
          path="/"
        >
          <Route
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <Kpi />
              </React.Suspense>
            }
            path="/"
          />
          <Route
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <Products />
              </React.Suspense>
            }
            path="/products"
          />

          <Route
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <Users />
              </React.Suspense>
            }
            path="/users"
          />
          <Route
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <Articles />
              </React.Suspense>
            }
            path="/articles"
          />
          <Route
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <VistedProducts />
              </React.Suspense>
            }
            path="/visited-products"
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
