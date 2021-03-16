import React from "react";
import { CatalogWrapper } from "./CatalogWrapper/CatalogWrapper";
import "./mainscreen.sass";
export const MainScreen: React.FC = () => {
  return (
    <div className="main-wrapper">
      <div className="first-wrapper"></div>
      <CatalogWrapper />
    </div>
  );
};
