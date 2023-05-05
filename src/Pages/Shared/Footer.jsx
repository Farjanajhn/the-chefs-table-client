import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid className="bg-dark text-light">
      <Row className="p-3">
        <Col className="text-center">
          © 2023 My Company, Inc. All rights reserved.
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;