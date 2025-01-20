import React from 'react';
import { Code, Layout, Users, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-10 h-10 text-yellow-400" />,
    title: 'Software Development',
    description: 'Crafting clean, efficient, and scalable code for web applications using modern technologies.',
  },
  {
    icon: <Layout className="w-10 h-10 text-yellow-400" />,
    title: 'Effective Communication',
    description: 'Ensuring clarity and collaboration through transparent and effective communication strategies.',
  },
  {
    icon: <Users className="w-10 h-10 text-yellow-400" />,
    title: 'Team Collaboration',
    description: 'Leading and collaborating with development teams to deliver projects efficiently.',
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-yellow-400" />,
    title: 'Business Growth Strategies',
    description: 'Helping businesses scale with technology-driven solutions and automation.',
  },
];

const WhatImDoing: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-blue-600 to-teal-600 text-white py-16 mt-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold tracking-tight">My Expertise</h2>
        <p className="mt-4 text-lg text-gray-100">Providing quality services with a focus on innovation and excellence.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-8 rounded-xl bg-gray-800 text-gray-100 shadow-lg transform transition-transform duration-500 hover:scale-110 hover:shadow-xl"
          >
            {service.icon}
            <h3 className="text-2xl font-bold mt-4">{service.title}</h3>
            <p className="text-gray-300 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatImDoing;
