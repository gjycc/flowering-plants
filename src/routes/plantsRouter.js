import {Router} from "express";
import {getPlants} from "../controllers/plantsController.js";

const router = Router();

router.get("/", getPlants);

export default router;