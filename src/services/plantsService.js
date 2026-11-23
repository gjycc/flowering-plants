import {getAllPlants, getPlantById, createPlant, deletePlant} from "../models/plantsModel.js";

export const listPlants = async () => {
  return await getAllPlants();
};

export const findPlantById = async (id) => {
  return await getPlantById(id);
};

export const addPlant = async (plantData) => {
  return await createPlant(plantData);
};

export const removePlant = async (id) => {
  return await deletePlant(id);
};
