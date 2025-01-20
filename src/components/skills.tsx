import React from 'react';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Node.js',
  'Git', 'Tailwind', 'MySQL', 'PostgreSQL', 'Redux', 'Hono', 'Drizzle-orm',
];

const colors = [
  'bg-blue-500', 'bg-indigo-500', 'bg-teal-500', 'bg-gray-500', 'bg-gray-600',
  'bg-blue-600', 'bg-blue-700', 'bg-indigo-600', 'bg-gray-700', 'bg-blue-800'
];

const MySkills: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white flex flex-col justify-center items-center p-8 mt-24">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`px-4 py-2 rounded-lg shadow-md transform transition-all hover:scale-105 hover:shadow-xl ${colors[index % colors.length]} `}
          >
            <p className="text-center font-semibold">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
