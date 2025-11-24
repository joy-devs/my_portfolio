// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from '../src/pages/error.tsx';
import About from './components/about.tsx';
import ProjectsSection from './components/projects.tsx';
import MySkills from './components/skills.tsx';
import WhatImDoing from './components/experience.tsx';
import Contact from './components/contact.tsx';
import Certifications from './components/certifications.tsx';
import App from './App.tsx';

// Define your routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Main layout with Navbar, ProfileSection, Footer, etc.
    errorElement: <Error />, // Error page for handling unknown routes
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'projects',
        element: <ProjectsSection />,
      },
      {
        path: 'skills',
        element: <MySkills />,
      },
      {
        path: 'experience',
        element: <WhatImDoing />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'certifications',
        element: <Certifications />,
      },
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
