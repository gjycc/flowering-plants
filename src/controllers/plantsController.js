import {listPlants, findPlantById, addPlant, removePlant} from "../services/plantsService.js";


export const getPlants = async (req, res) => {
  try {
    const plants = await listPlants();
    res.json(plants);
  } catch (error) {
    console.error("Error fetching plants:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getPlant = async (req, res) => {
  try {
    const plant = await findPlantById(req.params.id);

    if (!plant) {
      return res.status(404).json({ error: "No se encontró la planta" });
    }

    res.json(plant);
  } catch (error) {
    console.error("Error fetching plant:", error);
    res.status(500).json({ error: "Error al obtener la planta" });
  }
};

export const postPlant = async (req, res) => {
  try {
    const {especie, descripcion, precio} = req.body ?? {};

    if (
        typeof especie !== "string" ||
        typeof descripcion !== "string" ||
        typeof precio !== "number" || 
        precio < 0 ) {
      return res.status(400).json({ error: "Faltan campos obligatorios o tienen un formato incorrecto" });
    }
    const newPlant = await addPlant({ especie, descripcion, precio });
    res.status(201).json(newPlant);
  } catch (error) {
    
    res.status(500).json({ error: "Error al crear la planta" });
  }
};
