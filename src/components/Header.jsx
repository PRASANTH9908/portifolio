import React from 'react';
import './header.css';  // For any custom styling


const Header = () => {
  return (
    <div className="header-container">
      <div className="container">
        {/* Profile Section */}
        <div className="row align-items-center">
          <div className="col-12 col-md-2 text-center text-md-left">
          </div>
          <div className="col-12 col-md-10 text-center text-md-left">
          </div>
        </div>

    

        {/* Main Header Section */}
        <div className="main-header text-center my-5">
          <h1 className="display-4 text-dark">THEEPALAPUDI PRASANTH</h1>
          <p className="lead text-muted mt-3">I am a passionate Computer Science graduate with a solid foundation in Python, HTML, CSS, and JavaScript. With growing expertise in React.js, I am continuously honing my skills in web development and software engineering. I am proficient in UI/UX principles, responsive design, and object-oriented programming, ensuring the creation of seamless, user-friendly interfaces.</p>

          <img src="images/PRASANTH.jpg" className="img-fluid rounded" width="150" height="150" alt="Movie Thumbnail" />

        </div>

        {/* About Me Section */}
        <div className="text-center mt-5">
          <button className="btn btn-success btn-lg">About Me</button>
          <h2 className="mt-3">Prasanth</h2>
          <h3>Profile</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
