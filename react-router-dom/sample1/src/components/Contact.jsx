// src/components/Contact.js

import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <h2>Contact Page</h2>
      <p>Get in touch with us through this Contact page!</p>
      <nav>
        <Link to="/">Go to Home</Link> | <Link to="/about">Go to About</Link>
      </nav>
    </div>
  );
};

export default Contact;
