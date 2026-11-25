import { collection, getDocs, doc, getDoc,addDoc, deleteDoc } from "firebase/firestore";

import { db } from "../config/firebase.js";

const plantsCollection = collection(db, "plants");

export const getAllPlants = async () => {
  const snapshot = await getDocs(plantsCollection);

  return snapshot.docs.map((item) => ({
    ...item.data(),
    id: item.id, 

  }));
};

export const getPlantById = async (id) => {
  const reference = doc(db, "plants", id);
  const snapshot = await getDoc(reference);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    ...snapshot.data(),
    id: snapshot.id
  };
};

export const createPlant = async (data) => {
  const reference = await addDoc(plantsCollection, data);
  
  return { ...data, id: reference.id };
};

export const deletePlant = async (id) => {
  const reference = doc(db, "plants", id);
  const snapshot = await getDoc(reference);

  if (!snapshot.exists()) {
   return null;
  }
  await deleteDoc(reference);

  return { ...snapshot.data(), id: snapshot.id 

  };
};

