import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiPhp,
  DiJava,
} from "react-icons/di";

import {
  SiRedux,
  SiBootstrap,
  SiTypescript,
  SiWebpack,
  SiMui,
  SiReact
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      {/* Core Frontend */}
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      {/* React Native */}
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
      </Col>

      {/* State Management */}
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>

      {/* UI Frameworks */}
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMui />
      </Col>

      {/* TypeScript */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>

      {/* Backend Support */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>

      {/* Bundler */}
      <Col xs={4} md={2} className="tech-icons">
        <SiWebpack />
      </Col>

    </Row>
  );
}

export default Techstack;
