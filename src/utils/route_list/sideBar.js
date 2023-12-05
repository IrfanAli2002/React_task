import { GoPeople } from "react-icons/go";
import { Home } from "../../pages/Home";

export const sideBarData = [
  {
    name: "Customers",
    linkTo: "/",
    Icon: ({ size, color }) => {
      return <GoPeople size={size} color={color} />;
    },
    element: <Home />,
    list_in_sidebar: true,
  },
];
