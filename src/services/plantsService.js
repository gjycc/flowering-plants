import {getAllPlants, getPlantById, createPlant, deletePlant} from "../models/plantsModel.js";

export const listPlants = async () => {
  return await getAllPlants();
};

export const findPlantById = async (id) => {
  return await getPlantById(id);
};

export const addPlant = async (data) => {
  return await createPlant(data);
};

export const removePlant = async (id) => {
  return await deletePlant(id);
};
