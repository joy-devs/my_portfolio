import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin } from 'lucide-react'; // Icons for the left side

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('');
    
    emailjs
      .send(
        'service_h7ni7tr', 
        'template_lt6qlvr', 
        { name: formData.name, email: formData.email, message: formData.message }, 
        'Sa9WTo-pAtKQnUx5M' 
      )
      .then(
        () => {
          setStatus('Message Sent! ✅');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setStatus('Failed to send message ❌');
          console.error('Error:', error);
        }
      );
  };

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4 flex justify-center items-center mt-10">
      <div className="max-w-5xl w-full p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
        {/* Left Side Content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-400">
            I'd love to hear from you! Whether you have a question or just want to say hi, feel free to reach out.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-blue-500" />
              <span className="text-gray-800 dark:text-gray-300">joycewambui317@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-blue-500" />
              <span className="text-gray-800 dark:text-gray-300">+25412209765</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-blue-500" />
              <span className="text-gray-800 dark:text-gray-300">Kutus Kirinyaga </span>
            </div>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div>
          <form onSubmit={sendEmail} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 focus:border-blue-500 focus:ring-blue-500 transition duration-200 ease-in-out"
                required
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 focus:border-blue-500 focus:ring-blue-500 transition duration-200 ease-in-out"
                required
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 focus:border-blue-500 focus:ring-blue-500 transition duration-200 ease-in-out h-40"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:outline-none transition duration-300 ease-in-out hover:scale-105 transform"
            >
              Send Message
            </button>

            {/* Status message */}
            {status && (
              <p className={`text-center mt-4 ${status.includes('✅') ? 'text-green-500' : 'text-red-500'}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
