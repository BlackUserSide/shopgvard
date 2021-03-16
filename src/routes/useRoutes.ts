import { MainScreen } from "../components/MainScreen/MainScreen";
import { TRoutesWrapper } from "./RoutesContext";

export const useRoutes: TRoutesWrapper = {
  routes: [{ path: "/", exact: true, component: MainScreen, routes: [] }],
};
