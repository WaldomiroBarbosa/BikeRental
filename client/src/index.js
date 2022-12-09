import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import LoginScreen from "./presentation/screens/login/LoginScreen";
import HomeScreen from "./presentation/screens/home/HomeScreen";
import ProfileScreen from "./presentation/screens/perfil/Profile";
import BikeScreen from "./presentation/screens/bikes/Bikes";
import ResponsiveAppBar from "./components/appbar/Appbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <div>
      <Routes>
        <Route path={"/"} element={<LoginScreen />} />
        <Route path={"/home"} element={<HomeScreen />} />
        <Route
          path={"/profile"}
          element={
            <>
              <ResponsiveAppBar />
              <ProfileScreen />
            </>
          }
        />
        <Route
          path={"/bicicletas"}
          element={
            <>
              <ResponsiveAppBar />
              <BikeScreen />
            </>
          }
        />
      </Routes>
    </div>
  </BrowserRouter>
);
