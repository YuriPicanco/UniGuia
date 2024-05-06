import { Router } from "express";
import UseRoute from "./use.routes.js";
import FormRoute from "./form.route.js";
import AssistenceRoute from "./assistence.route.js";

const routesApp = Router();

routesApp.use(UseRoute);
routesApp.use(FormRoute);
routesApp.use(AssistenceRoute);

export default routesApp;
