import React from 'react';
import { useNavigate } from 'react-router-dom';
import building from "./images/new_house.jpg";
import foundation from "./images/excavation.jpg";
import masonry from "./images/masonry.jpg";
import roofing from "./images/roofing.jpg";
import concret from "./images/concrete.jpg";

const buildingConstructionData = [
  {
    name: "New Building Construction",
    description: "Residential, commercial, and small industrial buildings.",
    image: building
  },
  {
    name: "Foundation and Excavation Work",
    description: "Site preparation, laying foundations.",
    image: foundation
  },
  {
    name: "Masonry and Carpentry",
    description: "Brickwork, woodwork, framing.",
    image: masonry
  },
  {
    name: "Roofing and Waterproofing",
    description: "Roof installation, repairs, and waterproofing.",
    image: roofing
  },
  {
    name: "Concrete Work",
    description: "Pouring and forming concrete for structures like foundations, walls, and floors.",
    image: concret
  }
];

const BuildingConstruction = () => {
  const navigate = useNavigate();

  return (
    <div className="service-details-container">
      <br />
      <h1 className="text-3xl font-bold text-center my-8">Building Construction</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {buildingConstructionData.map(subService => (
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

export default BuildingConstruction;
