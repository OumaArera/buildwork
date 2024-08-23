import React from 'react';
import { useNavigate } from 'react-router-dom';
import pavementPathway from "./images/pavement_pathway.jpg";
import landscaping from "./images/landscaping.jpg";
import fencingDecking from "./images/fencing_decking.jpg";
import exteriorLighting from "./images/exterior_lighting.jpg";
import irrigationSystems from "./images/irrigation_systems.jpg";

const outdoorAndLandscapeData = [
  {
    name: "Pavement and Pathway Construction",
    description: "Driveways, walkways, and patios.",
    image: pavementPathway
  },
  {
    name: "Landscaping",
    description: "Garden design, planting, and lawn installation.",
    image: landscaping
  },
  {
    name: "Fencing and Decking",
    description: "Installation of fences, decks, and pergolas.",
    image: fencingDecking
  },
  {
    name: "Exterior Lighting",
    description: "Garden and outdoor lighting installations.",
    image: exteriorLighting
  },
  {
    name: "Irrigation Systems",
    description: "Installation of garden irrigation and drainage systems.",
    image: irrigationSystems
  }
];

const OutdoorAndLandscape = () => {
  const navigate = useNavigate();

  return (
    <div className="service-details-container">
      <h1 className="text-3xl font-bold text-center my-8">Outdoor and Landscape</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {outdoorAndLandscapeData.map(subService => (
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

export default OutdoorAndLandscape;
