import React from 'react';
import { useNavigate } from 'react-router-dom';
import interiorDesign from "./images/interior_design.jpg";
import paintingFinishing from "./images/painting_finishing.jpg";
import customCarpentry from "./images/custom_carpentry.jpg";
import flooringInstallation from "./images/flooring_installation.jpg";
import ceilingWallTreatments from "./images/ceiling_wall_treatments.jpg";

const interiorDesignAndFinishingData = [
  {
    name: "Interior Design Consultation",
    description: "Space planning, material selection.",
    image: interiorDesign
  },
  {
    name: "Painting and Finishing",
    description: "Interior and exterior painting, plastering, and drywall.",
    image: paintingFinishing
  },
  {
    name: "Custom Carpentry",
    description: "Built-in furniture, cabinetry, and woodwork.",
    image: customCarpentry
  },
  {
    name: "Flooring Installation",
    description: "Tile, hardwood, laminate, and carpeting.",
    image: flooringInstallation
  },
  {
    name: "Ceiling and Wall Treatments",
    description: "Acoustic treatments, feature walls.",
    image: ceilingWallTreatments
  }
];

const InteriorDesignAndFinishing = () => {
  const navigate = useNavigate();

  return (
    <div className="service-details-container">
      <h1 className="text-3xl font-bold text-center my-8">Interior Design and Finishing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {interiorDesignAndFinishingData.map(subService => (
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

export default InteriorDesignAndFinishing;
