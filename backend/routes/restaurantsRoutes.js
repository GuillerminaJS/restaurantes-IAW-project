import express from "express";
import * as restaurantController from '../controllers/restaurantsController.js';

const router = express.Router();

router.get('/restaurants', restaurantController.showAllRestaurants);
router.get('/restaurants/:averagePrice', restaurantController.getRestaurantByAp);
router.get('/restaurants/:name', restaurantController.searchRestaurantsByName);
router.get('/restaurants/:idRestaurant', restaurantController.showRestaurantById);
router.get('/restaurants/:type', restaurantController.searchRestaurantByType);
router.post('/restaurants', restaurantController.newRestaurant);    
router.put('/restaurants', restaurantController.updateRestaurant);
router.delete('/restaurants/:idRestaurant', restaurantController.deleteRestaurant);

export default router;