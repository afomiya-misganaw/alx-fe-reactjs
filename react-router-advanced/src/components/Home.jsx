import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Advanced React Router Demo</h1>
      
      <div className="features">
        <div className="feature-card">
          <h3>Nested Routes</h3>
          <p>Profile section with nested navigation</p>
          <Link to="/profile" className="feature-link">View Profile</Link>
        </div>
        
        <div className="feature-card">
          <h3>Dynamic Routing</h3>
          <p>Blog posts with dynamic URLs</p>
          <div className="blog-links">
            <Link to="/blog/1" className="feature-link">Post 1</Link>
            <Link to="/blog/2" className="feature-link">Post 2</Link>
            <Link to="/blog/3" className="feature-link">Post 3</Link>
          </div>
        </div>
        
        <div className="feature-card">
          <h3>Protected Routes</h3>
          <p>Authentication required for profile access</p>
          <Link to="/login" className="feature-link">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
