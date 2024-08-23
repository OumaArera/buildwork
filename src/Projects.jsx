import React from 'react';
import { useNavigate } from 'react-router-dom';
import fourBedroomHouse from "./images/four_bedroom_house.jpg";

const projectData = {
  name: "Luxurious 4-Bedroom House",
  location: "Migori Town",
  description: "Experience unparalleled comfort and elegance in this exquisite 4-bedroom house. Designed with modern amenities and luxurious finishes, this home offers a spacious layout with a stunning living area, a gourmet kitchen, and beautifully landscaped gardens. Every detail, from the high-end fixtures to the custom cabinetry, has been thoughtfully crafted to provide a sophisticated and inviting environment.",
  image: fourBedroomHouse
};

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="project-details-container">
      <h1 className="text-3xl font-bold text-center my-8">Our Project</h1>
      <div className="bg-white shadow-lg rounded-lg p-4 max-w-3xl mx-auto">
        <img src={projectData.image} alt={projectData.name} className="rounded-lg w-full h-64 object-cover mb-4" />
        <h2 className="text-2xl font-bold">{projectData.name}</h2>
        <p className="text-gray-500 mt-2"><strong>Location:</strong> {projectData.location}</p>
        <p className="text-gray-700 mt-4">{projectData.description}</p>
      </div>
      <button
        onClick={() => navigate('/')}
        className="mt-8 bg-teal-500 text-white py-2 px-4 rounded-full hover:bg-teal-600 transition"
      >
        <i className="fas fa-arrow-left"></i> Back to Home
      </button>
    </div>
  );
};

export default Projects;
