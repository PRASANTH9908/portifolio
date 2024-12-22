import React from 'react';
import { Container, Row, Col,  } from 'react-bootstrap';  // Importing necessary components from react-bootstrap

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>

        {/* Footer Bottom */}
        <Row className="mt-3">
          <Col className="text-center">
         
            <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
