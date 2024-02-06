import React from "react";
import { Col, Row } from "react-bootstrap";
import {BsGithub} from 'react-icons/bs'
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiPrisma 
} from "react-icons/si";
import { FaAws } from "react-icons/fa";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsGithub  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrisma   />
      </Col>
    </Row>
  );
}

export default Toolstack;
