import express from "express";
import * as usersController from '../controllers/usersController.js';


const router = express.Router();

router.get('/users', usersController.showAllUsers);
router.post('/users', usersController.newUser);    
router.put('/users', usersController.updateUser);
router.delete('/users/:idUser', usersController.deleteUser);

// Register user
router.post("/register", usersController.registerUser);

// User login function
router.post('/login', usersController.loginUser);

export default router;



