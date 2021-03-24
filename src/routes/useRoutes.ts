import { MainScreen } from "../components/MainScreen/MainScreen";
import { ProductComponent } from "../components/ProductComposition/ProductComponent";
import { TRoutesWrapper } from "./RoutesContext";

export const useRoutes: TRoutesWrapper = {
  routes: [
    { path: "/", exact: true, component: MainScreen, routes: [] },
    {
      path: "/product/:id",
      exact: false,
      component: ProductComponent,
      routes: [],
    },
  ],
};
