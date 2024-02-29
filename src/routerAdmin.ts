import express from "express";
const routerAdmin = express.Router();
import restaurantControlle from "./controllers/restaurant.controller";

/**Resaurant */
routerAdmin.get('/', restaurantControlle.goHome);
routerAdmin
.get('/login', restaurantControlle.getLogin)
.post('/login', restaurantControlle.processLogin );
routerAdmin
.get('/signup', restaurantControlle.getSignup)
.post("/signup", restaurantControlle.processSignup);

/** Product */
/** User */
export default routerAdmin;