import { Link, useRouteError } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';

function Error() {
  const error: { statusText?: string; message?: string } = useRouteError() as {
    statusText?: string;
    message?: string;
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900">
      <div className="text-center max-w-lg">
        <p className="text-6xl font-bold text-red-500 mb-4">404</p>
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Oops! Page not found
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        {error && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {error.statusText || error.message}
          </p>
        )}
        <div className="mt-6 flex justify-center space-x-4">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition"
          >
            <ArrowLeft size={20} className="mr-2" />
            Go to Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-4 py-2 bg-gray-800 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
