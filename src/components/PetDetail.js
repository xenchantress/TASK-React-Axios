import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import { getPetById } from './api/pets';


function PetDetail() {
  const { petId } = useParams();
  const queryClient = useQueryClient();
  const { data: pet, isLoading, isError } = useQuery(['pet', petId], () => getPetById(petId));
  const mutation = useMutation(updatedPetData => updatePet(petId, updatedPetData), {
    onSuccess: () => {
      queryClient.invalidateQueries('pets');
    },
  });
  const [editMode, setEditMode] = useState(false);
  const [editedPet, setEditedPet] = useState({
    name: pet?.name || '',
    type: pet?.type || '',
    image: pet?.image || '',
    adopted: pet?.adopted || false,
  });

  const handleEdit = () => {
    setEditMode(true);
  };
  const handleSave = () => {
    mutation.mutate(editedPet);
    setEditMode(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !pet) {
    return <h1>There is no pet with the id: {petId}</h1>;
  }

  return (
    <div>
       {!editMode && (
        <>
          <h1>Name: {pet.name}</h1>
          <h1>Type: {pet.type}</h1>
          <h1>Adopted: {pet.adopted ? 'Yes' : 'No'}</h1>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
       {editMode && (
        <>
          <label>Name:</label>
          <input
            type="text"
            value={editedPet.name}
            onChange={(e) => setEditedPet({ ...editedPet, name: e.target.value })}
          />
           <button onClick={handleSave}>Save</button>
           </>
            )}
            </div>
          );
        }
      <div className="bg-[#F9E3BE] w-screen h-[100vh] flex justify-center items-center">
        <div className="border border-black rounded-md w-[70%] h-[70%] overflow-hidden flex flex-col md:flex-row p-5">
          <div className="h-full w-full md:w-[35%]">
            <img
              src={pet.image}
              alt={pet.name}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="w-full md:w-[65%] h-full pt-[30px] flex flex-col p-3">
            <h1>Name: {pet.name}</h1>
            <h1>Type: {pet.type}</h1>
            <h1>Adopted: {pet.adopted}</h1>

            <button className="w-[70px] border border-black rounded-md  hover:bg-green-400 mb-5">
              Adopt
            </button>

            <button className="w-[70px] border border-black rounded-md  hover:bg-red-400">
              Delete
            </button>
          </div>
        </div>
      </div>
    
  );
      }

export default PetDetail;
