import React from 'react';
import { useNavigate } from 'react-router-dom';
import background from './images/background.jpg';  // Adjust the path if necessary

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/services');
  };

  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="bg-teal-800 bg-opacity-75 p-6 rounded-lg text-center max-w-lg">
        <h2 className="text-4xl font-bold mb-4">Welcome to BuildWork Constructors</h2>
        <p className="text-lg mb-6">
          We are dedicated to delivering quality, innovative, and sustainable construction solutions.
        </p>
        <button
          onClick={handleClick}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
        >
          Our Services
        </button>
      </div>
    </div>
  );
};

export default Home;
