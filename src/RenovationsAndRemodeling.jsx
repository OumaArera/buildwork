import React from 'react';
import { useNavigate } from 'react-router-dom';
import homeRenovations from "./images/home_renovation.jpg";
import commercialRenovations from "./images/comercial_renovations.jpg";
import structuralRepairs from "./images/structural_repairs.jpg";
import additionsExtensions from "./images/additions_extensions.jpg";
import basementAttic from "./images/basement_attic.jpg";

const renovationsRemodellingData = [
  {
    name: "Home Renovations",
    description: "Kitchen, bathroom, and whole-home remodels.",
    image: homeRenovations
  },
  {
    name: "Commercial Renovations",
    description: "Office, retail, and small business spaces.",
    image: commercialRenovations
  },
  {
    name: "Structural Repairs",
    description: "Foundation repairs, structural reinforcements.",
    image: structuralRepairs
  },
  {
    name: "Additions and Extensions",
    description: "Building extra rooms, garages, or other expansions.",
    image: additionsExtensions
  },
  {
    name: "Basement and Attic Conversions",
    description: "Converting underutilized spaces into livable areas.",
    image: basementAttic
  }
];

const RenovationsAndRemodelling = () => {
  const navigate = useNavigate();

  return (
    <div className="service-details-container">
      <br />
      <h1 className="text-3xl font-bold text-center my-8">Renovations and Remodelling</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {renovationsRemodellingData.map(subService => (
          <div key={subService.name} className="sub-service-card bg-white shadow-lg rounded-lg p-4">
            <img src={subService.image} alt={subService.name} className="rounded-lg w-full h-48 object-cover" />
            <h2 className="text-xl font-bold mt-4">{subService.name}</h2>
            <p className="text-gray-600 mt-2">{subService.description}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate('/services')}
        className="mt-8 bg-teal-500 text-white py-2 px-4 rounded-full hover:bg-teal-600 transition"
      >
        <i className="fas fa-arrow-left"></i> Back to Services
      </button>
    </div>
  );
};

export default RenovationsAndRemodelling;
