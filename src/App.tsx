import React from "react";
import "./main.sass";
import { RoutesContext } from "./routes/RoutesContext";
import { MainRoutes } from "./routes/MainRouter";
import { useRoutes } from "./routes/useRoutes";
import { Hedaer } from "./components/Header/Header";
import { CartCreateContext } from "./context/CartContext";

export const App: React.FC = () => {
  return (
    <RoutesContext.Provider value={useRoutes}>
      <CartCreateContext>
        <div className="main-wrapper-cloud">
          <Hedaer />
          <MainRoutes />
        </div>
      </CartCreateContext>
    </RoutesContext.Provider>
  );
};
