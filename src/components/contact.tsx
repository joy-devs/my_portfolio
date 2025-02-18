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
        'service_3d3rzdr', 
        'template_gl9bxnf', 
        { name: formData.name, email: formData.email, message: formData.message }, 
        'TerRwIK2NAUJosevB' 
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
    <section className="min-h-screen bg-gradient-to-b from-blue-600 to-teal-600 text-white py-10 px-4 flex justify-center items-center mt-10">
      <div className="max-w-5xl w-full p-8 bg-gray-800 dark:bg-gray-900 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
        {/* Left Side Content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-100 mb-4">Get in Touch</h2>
          <p className="text-gray-200">
          Let’s connect! Feel free to reach out, whether you have a question or simply want to say hello.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-yellow-400" />
              <span className="text-gray-100">joycewambui317@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-yellow-400" />
              <span className="text-gray-100">+25412209765</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-yellow-400" />
              <span className="text-gray-100">Kutus Kirinyaga </span>
            </div>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div>
          <form onSubmit={sendEmail} className="space-y-6">
          <div className="relative">
  <input
    type="email"
    name="email"
    placeholder="Your Email"
    value={formData.email}
    onChange={handleChange}
    className="w-full px-4 py-3 rounded-md border border-gray-600 dark:border-gray-700 dark:bg-gray-900 focus:border-yellow-400 focus:ring-yellow-400 transition duration-200 ease-in-out text-gray-800 dark:text-gray-300" // Added text color
    required
  />
</div>

<div className="relative">
  <textarea
    name="message"
    placeholder="Your Message"
    value={formData.message}
    onChange={handleChange}
    className="w-full px-4 py-3 rounded-md border border-gray-600 dark:border-gray-700 dark:bg-gray-900 focus:border-yellow-400 focus:ring-yellow-400 transition duration-200 ease-in-out h-40 text-gray-800 dark:text-gray-300" // Added text color
    required
  ></textarea>
</div>

<button
  type="submit"
  className="w-full py-3 text-white bg-yellow-400 rounded-md hover:bg-yellow-500 focus:ring focus:ring-yellow-300 focus:outline-none transition duration-300 ease-in-out hover:scale-105 transform"
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
