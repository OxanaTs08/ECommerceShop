import { Outlet } from "react-router-dom";
import React from "react";
import NavBar from "../components/NavBar.tsx";
// import { Helmet } from "react-helmet";
import GlobalStyle from "../GlobalStyle.tsx";

const Layout = () => {
  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <main>
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
