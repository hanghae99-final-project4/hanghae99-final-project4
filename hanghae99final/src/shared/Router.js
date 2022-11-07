import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login3 from "../pages/Login3";
import KakaoLogin from "../pages/KakaoLogin";
// import NaverLogin from "../pages/NaverLogin";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login3 />} />
        <Route path="/kakaoLogin" element={<KakaoLogin />} />
        {/* <Route path="/naverLogin" element={<NaverLogin />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
