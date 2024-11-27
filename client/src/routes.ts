import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
  DEVICE_ROUTE,
} from "./utils/constantes.ts";
import Admin from "./pages/AdminPanel.tsx";
import Basket from "./pages/Basket.tsx";
import Shop from "./pages/Shop.tsx";
import Login from "./pages/LoginPage.tsx";
import Device from "./pages/DevicePage.tsx";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Login,
  },
  {
    path: DEVICE_ROUTE + "/:id",
    Component: Device,
  },
];
