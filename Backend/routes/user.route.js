import express from "express";
import { register } from "../controllers/user.controller.js";

const router = express.Router();

//define all rotes // endpoints
router.route("/register").post(register);

// api 
app.use()

export default router;