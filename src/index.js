// #react
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// #redux
import { Provider } from "react-redux";
import store from "./core/store";
// #page
import NotFoundPage from "./core/pages/not_found";
import LandingPage from "./core/pages/landing_page";
import SystemHomePage from "./core/pages/system_home";
import DashboardIndexPage from "./features/dashboard/pages";
import AccommodationIndexPage from "./features/accommodation/pages";
import InventoryIndexPage from "./features/inventory/pages";
// ##restaurant
import RestaurantIndexPage from "./features/restaurant/pages";
import RestaurantLandingPage from "./features/restaurant/pages/landing";
import PosIndexPage from "./features/restaurant/features/pos/pages";
import KitchenIndexPage from "./features/restaurant/features/kitchen/pages";
import SettingIndexPage from "./features/restaurant/features/setting/pages";
import ReportIndexPage from "./features/restaurant/features/report/pages";
import "./core/static/css/index.css";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage />, errorElement: <NotFoundPage /> },
  {
    path: "system/",
    element: <SystemHomePage />,
    children: [
      { index: true, element: <div>Yes !!!</div> },
      { path: "dashboard/", element: <DashboardIndexPage /> },
      { path: "accommodation/", element: <AccommodationIndexPage /> },
      { path: "inventory/", element: <InventoryIndexPage /> },
    ],
  },
  {
    path: "system/restaurant/",
    element: <RestaurantIndexPage />,
    children: [
      { index: true, element: <RestaurantLandingPage /> },
      { path: "pos/", element: <PosIndexPage /> },
      { path: "kitchen/", element: <KitchenIndexPage /> },
      { path: "setting/", element: <SettingIndexPage /> },
      { path: "report/", element: <ReportIndexPage /> },
    ],
  },
]);

export default router;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
