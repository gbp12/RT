import auth from "./auth.routes.jsx";
import app from "./app.routes.jsx";

export const routes = [...auth.routes, ...app.routes];
