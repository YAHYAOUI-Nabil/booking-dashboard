import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateOutlet from "./utils/PrivateOutlet";

const AuthenticationPage = React.lazy(() => import("./pages/auth/Login"));
const MainLayout = React.lazy(() => import("./pages/dashboard/MainLayout"));
const Guests = React.lazy(
  () => import("./pages/dashboard/components/guests/Guests")
);
const Home = React.lazy(() => import("./pages/dashboard/components/home/Home"));
const Bookings = React.lazy(
  () => import("./pages/dashboard/components/bookings/Bookings")
);
const Rooms = React.lazy(
  () => import("./pages/dashboard/components/rooms/Rooms")
);
const Users = React.lazy(
  () => import("./pages/dashboard/components/users/Users")
);
const Deals = React.lazy(
  () => import("./pages/dashboard/components/deals/Deals")
);
const Discounts = React.lazy(
  () => import("./pages/dashboard/components/discounts/Discounts")
);
const Hotels = React.lazy(
  () => import("./pages/dashboard/components/hotels/Hotels")
);
const Locations = React.lazy(
  () => import("./pages/dashboard/components/locations/Locations")
);
const Payments = React.lazy(
  () => import("./pages/dashboard/components/payments/Payments")
);
const Reviews = React.lazy(
  () => import("./pages/dashboard/components/reviews/Reviews")
);

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
      <Route
        path="/"
        element={
          <React.Suspense fallback={null}>
            <PrivateOutlet />
          </React.Suspense>
        }
      >
        <Route
          element={
            <React.Suspense fallback={null}>
              <MainLayout />
            </React.Suspense>
          }
          path="/"
        >
          <Route
            element={
              <React.Suspense fallback={null}>
                <Home />
              </React.Suspense>
            }
            index
          />
          <Route
            element={
              <React.Suspense fallback={null}>
                <Guests />
              </React.Suspense>
            }
            path="/guests"
          />
          <Route
            element={
              <React.Suspense fallback={null}>
                <Bookings />
              </React.Suspense>
            }
            path="/bookings"
          />
          <Route
            element={
              <React.Suspense fallback={null}>
                <Rooms />
              </React.Suspense>
            }
            path="/rooms"
          />
          <Route
            element={
              <React.Suspense fallback={null}>
                <Users />
              </React.Suspense>
            }
            path="/users"
          />
          <Route
            element={
              <React.Suspense fallback={null}>
                <Deals />
              </React.Suspense>
            }
            path="/deals"
          />
          <Route
            element={
              <React.Suspense fallback={null}>
                <Discounts />
              </React.Suspense>
            }
            path="/discounts"
          />
          <Route
            element={
              <React.Suspense fallback={null}>
                <Hotels />
              </React.Suspense>
            }
            path="/hotels"
          />
          <Route
            element={
              <React.Suspense fallback={null}>
                <Locations />
              </React.Suspense>
            }
            path="/locations"
          />
          <Route
            element={
              <React.Suspense fallback={null}>
                <Payments />
              </React.Suspense>
            }
            path="/payments"
          />
          <Route
            element={
              <React.Suspense fallback={null}>
                <Reviews />
              </React.Suspense>
            }
            path="/reviews"
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
