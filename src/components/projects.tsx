import { useEffect, useState } from 'react';
import { Loader } from 'lucide-react';

const ProjectsSection = () => {
  interface Project {
    id: number;
    name: string;
    description: string;
    html_url: string;
    homepage: string | null;
    topics?: string[];
  }

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  // List of supported deployment domains
  const deploymentDomains = ['vercel.app', 'netlify.app', 'github.io'];

  const fetchProjects = async () => {
    try {
      const response = await fetch('https://api.github.com/users/joy-devs/repos', {
        headers: {
          Accept: 'application/vnd.github+json',
        },
      });
      const data = await response.json();
      console.log("Fetched projects:", data);

      // Filter only projects with a live homepage link
      const liveProjects = data.filter(
        (project: Project) =>
          project.homepage &&
          deploymentDomains.some((domain) => project.homepage!.includes(domain))
      );

      setProjects(liveProjects);
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
    <section className="my-24 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        Projects
      </h2>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader className="animate-spin w-12 h-12 text-blue-600" />
        </div>
      ) : projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg shadow-md transition transform hover:-translate-y-2 hover:shadow-lg dark:hover:shadow-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 duration-300 ease-in-out animate-fadeIn"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-100 dark:text-white">
                {project.name}
              </h3>
              <p className="text-gray-300 dark:text-gray-400 mb-4">
                {project.description || 'No description available.'}
              </p>
              <a
                href={project.homepage!}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Deployed Website
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No live projects found.
        </p>
      )}
    </section>
  );
};

export default ProjectsSection;
