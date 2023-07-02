import Home from "../pages/app/home/index";
import Profile from "../pages/app/profile/index";
import SidebarContainer from "../components/containers/SidebarContainer";

export const routes = [
  {
    path: "",
    element: <SidebarContainer />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
];

export default {
  routes,
};
