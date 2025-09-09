import React, { useState, useEffect } from "react";
import { Linkedin, Github } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import profileImage from "../assets/IMG_6872.jpg"; // Adjust the path

const ProfileSection: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the stored resume URL from Vercel Blob Storage
    const storedResumeUrl =
      "https://dwat9vxeqzbysyvb.public.blob.vercel-storage.com/joyce-%20%28resume%29.pdf"; // Replace with your actual URL
    setResumeUrl(storedResumeUrl);
  }, []);

  const [text] = useTypewriter({
    words: ["I'm a passionate software developer with a knack for creating intuitive user interfaces."],
    loop: 1,
    typeSpeed: 50,
    deleteSpeed: 300,
    delaySpeed: 2000,
  });

  return (
    <section
      className={`relative flex flex-col items-center justify-center min-h-screen ${
        darkMode ? "bg-black text-white" : "bg-gradient-to-r from-blue-500 to-teal-500 text-white"
      } transition-all duration-500 py-16 px-8`}
    >
      {/* Dark Mode Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`absolute top-6 left-6 p-3 rounded-full border-2 ${
          darkMode ? "border-white" : "border-blue-600"
        } text-white transition`}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Content Container */}
      <div className="flex flex-col items-center justify-center text-center lg:text-left space-y-8 lg:space-y-0 lg:flex-row lg:space-x-12">
        {/* Profile Image */}
        <Fade direction="up" triggerOnce>
          <div
            className={`w-56 h-56 rounded-full border-4 ${
              darkMode ? "border-white" : "border-blue-600"
            } flex items-center justify-center p-2 mt-8 lg:mt-0`}
          >
            <img src={profileImage} alt="Profile" className="rounded-full w-full h-full object-cover" />
          </div>
        </Fade>

        {/* Text Content */}
        <Fade direction="right" triggerOnce>
          <div className="relative z-10 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Hi, I'm Joyce Wambui</h1>
            <h2 className="text-2xl md:text-3xl mb-6 font-medium">
              Creative Professional with Technical Expertise and a Passion for <span className="text-yellow-400">innovation</span>
            </h2>
            <p className="text-lg mb-6 text-gray-300">
              {text}
              <Cursor cursorColor={darkMode ? "white" : "black"} />
            </p>

            {/* View Resume Button (Only Visible If Resume Exists) */}
            {resumeUrl && (
              <a
                href={`https://docs.google.com/viewer?url=${resumeUrl}&embedded=true`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className={`${
                    darkMode ? "bg-gray-800 hover:bg-gray-600 text-white" : "bg-black hover:bg-gray-700 text-white"
                  } font-semibold py-3 px-8 rounded-lg mb-8 transition-all duration-300 transform hover:scale-105`}
                >
                  View Resume
                </button>
              </a>
            )}

            {/* Social Links */}
            <div className="flex space-x-8 justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/joyce-wambui-b826a3265/"
                target="_blank"
                rel="noopener noreferrer"
                className={`transform transition-transform duration-300 hover:scale-125 ${
                  darkMode ? "hover:text-gray-400" : "hover:text-yellow-400"
                }`}
              >
                <Linkedin className="w-10 h-10" />
              </a>
              <a
                href="https://github.com/joy-devs"
                target="_blank"
                rel="noopener noreferrer"
                className={`transform transition-transform duration-300 hover:scale-125 ${
                  darkMode ? "hover:text-gray-400" : "hover:text-yellow-400"
                }`}
              >
                <Github className="w-10 h-10" />
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default ProfileSection;
