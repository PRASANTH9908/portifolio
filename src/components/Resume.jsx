import React from 'react';

function ResumePage() {
  return (
    <div className="container mt-5">
      <h2>My Resume</h2>
      <p>Click the link below to download my resume or view it in the browser.</p>

      {/* Embed the PDF within the page */}
      <embed
        src="https://drive.google.com/file/d/1Or5oEWZ5YCgio1xlQqQgjmPV_ZD0f_9T/view?usp=drivesdk" 
        width="100%" 
        height="600px" 
        type="application/pdf"
      />
      
      <div className="mt-3">
        <a href="https://drive.google.com/file/d/1Or5oEWZ5YCgio1xlQqQgjmPV_ZD0f_9T/view?usp=drivesdk" download className="btn btn-primary">
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default ResumePage;
