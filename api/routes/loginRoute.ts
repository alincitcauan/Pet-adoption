import express from "express";
import AuthController from "../controllers/user.controller"
import verifyToken from "../middleware/authentication"


export const userRoutes = express.Router()

userRoutes.post("/sign-up", AuthController.signup)
userRoutes.post("/login", AuthController.signin)
userRoutes.post("/test_login",[verifyToken], AuthController.signin);