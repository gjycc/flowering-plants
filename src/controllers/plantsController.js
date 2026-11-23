import {listPlants} from "../services/plantsService.js";


export const getPlants = async (req, res) => {
  try {
    const plants = await listPlants();
    res.json(plants);
  } catch (error) {
    console.error("Error fetching plants:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};