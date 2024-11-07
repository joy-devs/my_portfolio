import React from 'react'

const About: React.FC = () => {
    return(
        <div className="min-h-screen p-6 mt-24 bg-white text-black">
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
        
        {/* Left side: Profile Card */}
        <div className="w-full md:w-1/3 lg:w-1/4 p-6 rounded-lg shadow-lg bg-gray-100 text-gray-800">
          <h2 className="text-3xl font-bold text-center mb-4">Anthony Gichuki</h2>
          <p className="text-center mb-6">Full-stack Software Engineer</p>
          <hr className="mb-6 border-gray-300" />
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-yellow-400" />
              <span>antonygatitu327@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-yellow-400" />
              <span>+254 799 16 31 01</span>
            </div>
            <div className="flex items-center space-x-4">
              <Calendar className="w-6 h-6 text-yellow-400" />
              <span>1994</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-yellow-400" />
              <span>Nairobi, Kenya</span>
            </div>
          </div>
          <div className="flex justify-center mt-6 space-x-4">
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 text-gray-800 hover:text-black transition-colors duration-300" />
            </a>
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 text-gray-800 hover:text-black transition-colors duration-300" />
            </a>
          </div>
        </div>

        {/* Right side: About Me Text */}
        <div className="w-full md:w-2/3 lg:w-3/4 p-8 rounded-lg shadow-lg bg-gray-100 text-gray-800">
          <h1 className="text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl mb-4">
            After high school, I pursued my passion for programming by joining Kirinyaga University and enrolling in a coding bootcamp with Teach2Give, where I learned full-stack web development. My favorite part of programming is solving problems. I love the feeling of finally figuring out a solution.
          </p>
          <p className="text-xl mb-4">
            My core stack includes <span className="text-purple-500">React, JavaScript, Node.js, and PostgreSQL</span>. I am also familiar with TypeScript and Hono. I constantly seek to learn new technologies and improve my skills.
          </p>
          <p className="text-xl mb-4">
            I am currently looking for a part-time position as a software developer.
          </p>
          <p className="text-xl mb-8">
            In my free time, I enjoy playing video games, watching movies, and reading novels. I'm also interested in <span className="text-purple-500">psychology</span> and <span className="text-purple-500">robotics</span>.
          </p>
        </div>
      </div>
    </div>


    );
};

export default About;