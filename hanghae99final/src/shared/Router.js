import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import MainPage from "../Pages/MainPage";
=======
import MainPage from "../pages/MainPage";
import StandPage from "../pages/StandPage";
import SitdownPage from "../pages/SitdownPage";
>>>>>>> 0234b14d3ced4edbdfa40e2d6d90f50b9168c4fc

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sitdownpage" element={<SitdownPage />} />
        <Route path="/standpage" element={<StandPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
