import React from 'react';
import { FiMail, FiPhone, FiCalendar, FiMapPin } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const About: React.FC = () => {
    return (
        <div className="min-h-screen p-6 mt-24 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
                {/* Left side: Profile Card */}
                <div className="w-full md:w-1/3 lg:w-1/4 p-6 rounded-lg shadow-xl bg-gray-800 text-gray-100">
                    <h2 className="text-3xl font-bold text-center mb-4">Joyce Wambui</h2>
                    <p className="text-center mb-6">Full-stack Software Developer</p>
                    <hr className="mb-6 border-gray-600" />
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <FiMail className="w-6 h-6 text-yellow-400" />
                            <span>joycewambui317@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FiPhone className="w-6 h-6 text-yellow-400" />
                            <span>+254 12209765</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FiCalendar className="w-6 h-6 text-yellow-400" />
                            <span>2003</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FiMapPin className="w-6 h-6 text-yellow-400" />
                            <span>Nairobi, Kenya</span>
                        </div>
                    </div>
                    <div className="flex justify-center mt-6 space-x-4">
                        <a href="https://www.linkedin.com/in/joyce-wambui-b826a3265/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="w-6 h-6 text-white hover:text-yellow-400 transition-colors duration-300" />
                        </a>
                        <a href="https://github.com/joy-devs" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="w-6 h-6 text-white hover:text-yellow-400 transition-colors duration-300" />
                        </a>
                    </div>
                </div>

                {/* Right side: About Me Text */}
                <div className="w-full md:w-2/3 lg:w-3/4 p-8 rounded-lg shadow-xl bg-gray-800 text-gray-100">
                    <h1 className="text-5xl font-bold mb-4">About Me</h1>
                    <p className="text-xl mb-4">
                        I pursued my passion for creativity and communication by studying at Kirinyaga University and later joining a coding bootcamp with Teach2Give, where I learned how to simplify complex technical concepts. What excites me most about copywriting is the challenge of turning ideas into clear, engaging, and impactful content. Just like solving coding problems, I enjoy finding the right words and structure to connect with audiences, inspire action, and deliver messages that align with organizational goals.                    </p>
                    <p className="text-xl mb-4">
                        My core stack includes <span className="text-purple-500">JavaScript, Node.js, React, TypeScript, and PostgreSQL</span>. I am also familiar with TypeScript and Hono. I constantly seek to learn new technologies and improve my skills.
                    </p>
                    
                    <p className="text-xl mb-8">
                        During my leisure time, I enjoy listening to podcasts on public speaking, communication and leadership, as well as watching movies.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
