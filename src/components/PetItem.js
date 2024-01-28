import React from "react";
import { Link } from "react-router-dom";



const PetItem = ({ pet }) => {
  return (
    <div>
    <Link to={`/pets/${pet.id}`} className="w-[300px] h-[400px]  border border-black rounded-md flex flex-col justify-between items-center p-4">
      <button>View Details</button>
      <h1 className="text-md font-bold">{pet.name}</h1>
      <img 
      src={pet.image}
      alt={`${pet.name}-cat`}
      className="w-[200px] rounded-md"/>

      <button className=" border border-black px-5 py-1 rounded-md hover:bg-[black] hover:text-white">
        View
      </button>
    </Link>
    </div>
  );
};

export default PetItem;