import React from 'react';
import { Monitor, Smartphone, Quote, PenTool } from 'lucide-react'; // Example for icons, replace with your choice

const services = [
  {
    icon: <Monitor className="w-8 h-8 text-yellow-400" />, // Example icon
    title: 'Web Development',
    description: 'High-quality development of sites at the professional level.',
  },
  {
    icon: <Smartphone className="w-8 h-8 text-yellow-400" />, // Example icon
    title: 'Responsive Web Applications',
    description: 'Creating the most modern and high-quality web applications with a professional approach.',
  },
  {
    icon: <Quote className="w-8 h-8 text-yellow-400" />, // Example icon
    title: 'Project Management',
    description: 'As a certified software engineer, I manage teams to successfully deliver all client projects.',
  },
  {
    icon: <PenTool className="w-8 h-8 text-yellow-400" />, // Example icon
    title: 'Web Design',
    description: 'The most modern and high-quality design made at a professional level.',
  },
];

const WhatImDoing: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white py-12 mt-24">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">What I'm Doing</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gray-700"
          >
            <div className="flex items-center mb-4">
              {service.icon}
              <h3 className="ml-4 text-2xl font-semibold">{service.title}</h3>
            </div>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatImDoing;
