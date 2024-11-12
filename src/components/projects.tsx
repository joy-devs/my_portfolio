import { useEffect, useState } from 'react';
import { Loader } from 'lucide-react';

const ProjectsSection = () => {
  interface Project {
    id: number;
    name: string;
    description: string;
    html_url: string;
    homepage: string;
  }

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const response = await fetch('https://api.github.com/users/antosnizzah/repos');
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching GitHub repositories:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section className="my-24 px-6"> {/* Increased margin to push content lower */}
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader className="animate-spin w-12 h-12 text-blue-500" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter((project) => project.homepage) // Show only deployed projects
            .map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition transform hover:-translate-y-2 hover:shadow-lg dark:hover:shadow-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 duration-300 ease-in-out animate-fadeIn"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description ? project.description : 'No description available.'}
                </p>
                {project.homepage ? (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 dark:text-blue-400 hover:underline"
                  >
                    View Deployed Website
                  </a>
                ) : (
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 dark:text-blue-400 hover:underline"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            ))}
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;

