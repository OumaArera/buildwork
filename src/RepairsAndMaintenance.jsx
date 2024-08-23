import React from 'react';
import { useNavigate } from 'react-router-dom';
import generalMaintenance from "./images/general_maintenance.jpg";
import roofRepairs from "./images/roof_repairs.jpg";
import plumbingElectricalRepairs from "./images/plumbing_electrical_repairs.jpg";
import windowDoorRepairs from "./images/window_door_repairs.jpg";
import gutterCleaningRepairs from "./images/gutter_cleaning_repairs.jpg";

const repairsAndMaintenanceData = [
  {
    name: "General Maintenance",
    description: "Ongoing building upkeep, minor repairs.",
    image: generalMaintenance
  },
  {
    name: "Roof Repairs",
    description: "Fixing leaks, replacing damaged tiles or shingles.",
    image: roofRepairs
  },
  {
    name: "Plumbing and Electrical Repairs",
    description: "Minor plumbing and electrical fixes.",
    image: plumbingElectricalRepairs
  },
  {
    name: "Window and Door Repairs",
    description: "Fixing or replacing windows and doors.",
    image: windowDoorRepairs
  },
  {
    name: "Gutter Cleaning and Repairs",
    description: "Regular maintenance of gutters and downspouts.",
    image: gutterCleaningRepairs
  }
];

const RepairsAndMaintenance = () => {
  const navigate = useNavigate();

  return (
    <div className="service-details-container">
      <h1 className="text-3xl font-bold text-center my-8">Repairs and Maintenance</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {repairsAndMaintenanceData.map(subService => (
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

export default RepairsAndMaintenance;
