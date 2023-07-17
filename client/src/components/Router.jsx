import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "./Login";
import Register from "./Register";

function AppRouter() {
  const location = useLocation();

  useEffect(() => {
    // Check the current route and dynamically import the corresponding CSS file
    const path = location.pathname;

    if (path === "/") {
      import("../style/homepage.css");
    } else if (path === "/Login") {
      import("../style/login.css");
    }
  }, [location.pathname]);
  return (
    <Routes>
      <Route exact path="/" component={HomePage} />
      <Route path="/Login" component={Login} />
      <Route path="/Register" component={Register} />
    </Routes>
  );
}

export default AppRouter;
