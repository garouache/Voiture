import React from "react";
import { Col, Container, Navbar } from "react-bootstrap";
import "./Assets/Css/Footer.css";

function Footer() {
  let fullYear = new Date().getFullYear();
  return (
    <Navbar className="footer">
      <Container className=" text-center text-muted ">
        <Col lg={12} className="textfooter">
          <div>
            {fullYear} - {fullYear + 1}, All Rights Reserved by Master MIOLA
          </div>
        </Col>
      </Container>
    </Navbar>
  );
}

export default Footer;
