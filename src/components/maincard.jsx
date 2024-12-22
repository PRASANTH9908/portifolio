import React from "react";  
import Card from "./card"; 
import './Maincard.css'; // Ensure this has your epic card effects

const Maincard = () => {
  return (
    <div className="container mt-4">

      <div className="row g-4">
        {/* First Row: 3 Cards */}
        <div className="col-12 col-md-4 col-lg-4">
          <Card 
            title="Personal Portfolio Website Project"
            content={
              <ul>
                <li>Description: A responsive personal portfolio website that showcases your projects, skills, and contact information.</li>
                <li> Technologies: React.js, CSS, React Router.</li>
                
               
                <li> Key Learning: Developed routing using React Router, gained experience in component-based architecture.</li>
              </ul>
            }
             image="./images/portfolio.png"
          />
        </div>

        <div className="col-12 col-md-4 col-lg-4">
          <Card 
            title="Technical Skills"
            content={
              <ul>
                <li>HTML5</li>
                <li>Python</li>
                <li>CSS3</li>
                <li>GitHub</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Bootstrap v5.3</li>
              </ul>
            }
            image="./images/Skills.png"
          />
        </div>

        <div className="col-12 col-md-4 col-lg-4">
          <Card 
            title="Education"
            content={
              <ul>
                <li>NBKR Institute of Science and Technology, Vidyanagar, Ap. (2020-2024) - B.Tech in CSE (AI&DS), CGPA: 7.2</li>
                <li>M.J.P.A.P.B.C.W Residential Junior College, Gudur, Andhra Pradesh. (2018-2020) - Intermediate (11th and 12th), CGPA: 8.5</li>
                <li>Z.P.H.S School, Gudur, Andhra Pradesh. (2017-2018) - CGPA: 8.7</li>
              </ul>
            }
             image="./images/education.png"
          />
        </div>

        {/* Second Row: 2 Cards */}
       
        <div className="col-12 col-md-4 col-lg-4">
          <Card 
            title="Internship & Certifications"
            content={
              <ul>
                <li>Python Programming Internship by DevSkillhub</li>
                <li>Experience: Basic programming in Python & Object-Oriented Programming</li>
              </ul>
            }
             image="./images/internship.png"
          />
        </div>

        <div className="col-12 col-md-4 col-lg-4">
          <Card 
            title="Hobbies & Interests"
            content={
              <ul>
                <li>Music</li>
                <li>Traveling</li>
                <li>Coding</li>
                <li>Photography</li>
              </ul>
            }
             image="./images/Habits.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Maincard;
