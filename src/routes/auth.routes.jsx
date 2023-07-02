import Login from "../pages/auth/login";

export const routes = [
  {
    path: "auth",
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
];

export default {
  routes,
};
