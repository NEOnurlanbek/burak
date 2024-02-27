import express from "express";
const routerAdmin = express.Router();
import restaurantControlle from "./controllers/restaurant.controller";

routerAdmin.get('/', restaurantControlle.goHome);

routerAdmin.get('/login', restaurantControlle.getLogin);

routerAdmin.get('/signup', restaurantControlle.getSignup);

export default routerAdmin;