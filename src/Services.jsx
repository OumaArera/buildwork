import React from 'react';
import { useNavigate } from 'react-router-dom';
import building from "./images/buildng_construction.jpg";
import renovations from "./images/building_renovation.jpg";
import interior from "./images/interior_design_main.jpg";
import landscape from "./images/landscape_design.jpg";
import repais from "./images/house_repaise_and_maintenance.jpg";
import consulatncy from "./images/Consultancy.jpg"

const servicesData = [
  {
    name: "Building Construction",
    description: "Quality construction services for residential, commercial, and industrial buildings.",
    image: building,
    route: "/services/building-construction"
  },
  {
    name: "Renovations and Remodeling",
    description: "Transform your space with our expert renovation and remodeling services.",
    image: renovations,
    route: "/services/renovations-remodeling"
  },
  {
    name: "Interior Design and Finishing",
    description: "Beautiful interiors with our comprehensive design and finishing services.",
    image: interior,
    route: "/services/interior-design-finishing"
  },
  {
    name: "Outdoor and Landscaping Services",
    description: "Enhance your outdoor spaces with our landscaping and outdoor services.",
    image: landscape,
    route: "/services/outdoor-landscaping"
  },
  {
    name: "Repairs and Maintenance",
    description: "Keep your property in top condition with our repair and maintenance services.",
    image: repais,
    route: "/services/repairs-maintenance"
  },
  {
    name: "Consulting and Advisory",
    description: "Expert consulting and advisory services to guide your projects.",
    image: consulatncy,
    route: "/services/consulting-advisory"
  }
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="services-container">
      <br />
      <br />
      <h1 className="text-3xl font-bold text-center my-8">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map(service => (
          <div key={service.name} className="service-card bg-white shadow-lg rounded-lg p-4">
            <img src={service.image} alt={service.name} className="rounded-lg w-full h-48 object-cover" />
            <h2 className="text-xl font-bold mt-4">{service.name}</h2>
            <p className="text-gray-600 mt-2">{service.description}</p>
            <button
              onClick={() => navigate(service.route)}
              className="mt-4 bg-teal-500 text-white py-2 px-4 rounded-full hover:bg-teal-600 transition"
            >
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
