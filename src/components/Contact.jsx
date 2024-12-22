import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, like sending an email or saving the data.
    console.log('Form submitted', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <p className="text-center mb-5">If you have any questions, feel free to send us a message!</p>

      {/* Contact Form */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <br />
          <br />
          <br />
          <br />
    </div>
  );
}

export default ContactPage;
