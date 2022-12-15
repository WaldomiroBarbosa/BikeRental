import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import LoginScreen from "./presentation/screens/login/LoginScreen";
import HomeScreen from "./presentation/screens/home/HomeScreen";
import ProfileScreen from "./presentation/screens/perfil/Profile";
import BikeScreen from "./presentation/screens/bikes/Bikes";
import ResponsiveAppBar from "./components/appbar/Appbar";
import ProfileAdminScreen from "./presentation/screens/perfil/ProfileAdmin";
import BikeAdminScreen from "./presentation/screens/bikes/BikeAdmin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <div>
      <Routes>
        <Route path={"/"} element={<LoginScreen />} />
        <Route
          path={"/home"}
          element={
            <>
              <ResponsiveAppBar commonUser={true} />
              <HomeScreen />
            </>
          }
        />
        <Route
          path={"/home/admin"}
          element={
            <>
              <ResponsiveAppBar commonUser={false} />
              <HomeScreen />
            </>
          }
        />
        <Route
          path={"/profile"}
          element={
            <>
              <ResponsiveAppBar commonUser={true} />
              <ProfileScreen />
            </>
          }
        />
        <Route
          path={"/profile/admin"}
          element={
            <>
              <ResponsiveAppBar commonUser={false} />
              <ProfileAdminScreen />
            </>
          }
        />
        <Route
          path={"/bicicletas"}
          element={
            <>
              <ResponsiveAppBar commonUser={true} />
              <BikeScreen />
            </>
          }
        />
      </Routes>
    </div>
  </BrowserRouter>
);
