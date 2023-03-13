import React from "react";
import { createRoutesFromElements, Navigate, Route } from "react-router-dom";
import PublicMain from "../pages/public/main";

export const publicRoutes = createRoutesFromElements(
  <Route path="/">
    <Route index element={<PublicMain />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Route>
);
