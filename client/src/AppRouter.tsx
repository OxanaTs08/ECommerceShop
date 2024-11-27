import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { authRoutes, publicRoutes } from "./routes.ts";
import Layout from "./pages/Layout.tsx";
import { useContext } from "react";
import { Context } from "./index.tsx";

const AppRouter = () => {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {user?.isAuth &&
            authRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          {publicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
