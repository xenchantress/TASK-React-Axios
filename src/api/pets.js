import instance from './index';
import axios from "axios";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useUpdatePetMutation } from './api/pets';


const baseURL = "https://coded-pets-api-crud.eapi.joincoded.com/pets";

const instance = axios.create({
  baseURL: baseURL,
  
});


export const getAllPets = () => instance.get('/pets');
export const addNewPet = (newPetData) => instance.post('/pets', newPetData);
export const updatePetById = (id, updatedPetData) => instance.put(`/pets/${id}`, updatedPetData);
export const deletePetById = (id) => instance.delete(`/pets/${id}`);

export const getPetById = async (id) => {
    const response = await instance.get(`/${id}`);
    return response.data;
  };

  
  
  export const updatePet = async (id, updatedPetData) => {
    const response = await instance.put(`/${id}`, updatedPetData);
    return response.data;
  };

  export const useUpdatePetMutation = () => {
    const queryClient = useQueryClient();


  const mutation = useMutation(updatedPetData => updatePet(petId, updatedPetData), {
    onSuccess: () => {
        queryClient.invalidateQueries('pets');
    
    },
  });
  return mutation;
};