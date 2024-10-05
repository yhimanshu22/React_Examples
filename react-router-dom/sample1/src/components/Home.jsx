// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h2>Home Page</h2>
      <p>Welcome to the Home page!</p>
      <nav>
        <Link to="/about">Go to About</Link> | <Link to="/contact">Go to Contact</Link>
      </nav>
    </>
  );
};

export default Home;
