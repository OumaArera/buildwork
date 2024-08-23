import React from 'react';
import { useNavigate } from 'react-router-dom';
import projectPlanningManagement from "./images/project_planning_management.jpg";
import costEstimationBudgeting from "./images/cost_estimation_budgeting.jpg";
import permitAcquisition from "./images/permit_acquisition.jpg";
import sustainabilityConsulting from "./images/sustainability_consulting.jpg";

const consultancyAndAdvisoryData = [
  {
    name: "Project Planning and Management",
    description: "Overseeing construction or renovation projects.",
    image: projectPlanningManagement
  },
  {
    name: "Cost Estimation and Budgeting",
    description: "Providing detailed cost estimates for projects.",
    image: costEstimationBudgeting
  },
  {
    name: "Permit Acquisition",
    description: "Handling building permits and regulatory approvals.",
    image: permitAcquisition
  },
  {
    name: "Sustainability Consulting",
    description: "Advising on energy-efficient building practices.",
    image: sustainabilityConsulting
  }
];

const ConsultancyAndAdvisory = () => {
  const navigate = useNavigate();

  return (
    <div className="service-details-container">
      <h1 className="text-3xl font-bold text-center my-8">Consultancy and Advisory</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {consultancyAndAdvisoryData.map(subService => (
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

export default ConsultancyAndAdvisory;
