import { Dashboard } from "../../pages/Dashboard";

export const router_list = [
  {
    caption: "Dashboard",
    linkTo: "/*",
    icon: "",
    element: <Dashboard />,
    authRequired: true,
  },
];
