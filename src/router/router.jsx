/** @format */

import { Route, Router, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import SignUp from "../pages/signUp/signUp";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  );
}
