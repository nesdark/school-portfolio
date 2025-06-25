import { Routes, Route, useParams, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path={`/`} element={<Home />} />
      {/* <Route path={`/about`} element={<About />} /> */}
    </Routes>
  );
}
