import React from 'react';

// Sample certification data (you will replace or add to this later)
const certifications = [
  {
    title: 'Full Stack Software Development',
    issuer: 'Upskill Academy',
    year: '2024',
    fileUrl: '#', // you will add your scanned PDF link or image later
  },
  {
    title: 'Public Speaking Training',
    issuer: 'Upskill Academy',
    year: '2024',
    fileUrl: '#',
  },
];

const Certifications = () => {
  return (
    <div className="bg-gray-900 text-white flex flex-col justify-center items-center p-8 mt-24">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Certifications</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
            <p className="text-sm text-gray-300">Issued by: {cert.issuer}</p>
            <p className="text-sm text-gray-400 mb-4">Year: {cert.year}</p>

            <a
              href={cert.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 transition-all px-4 py-2 rounded-xl font-medium text-sm"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
