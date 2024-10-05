// src/components/About.js
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h2>About Page</h2>
      <p>This is the About page where you can learn more about us.</p>
      <nav>
        <Link to="/">Go to Home</Link> | <Link to="/contact">Go to Contact</Link>
      </nav>
    </div>
  );
};

export default About;
