import {Router} from "express";
import {getPlants,getPlant, postPlant} from "../controllers/plantsController.js";

const router = Router();

router.get("/", getPlants);
router.get("/:id", getPlant);

router.post("/", postPlant);

export default router;