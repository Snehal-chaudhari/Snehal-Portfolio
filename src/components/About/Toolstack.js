import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiGithub,
  SiGitlab,
  SiPostman,
  SiTrello,
  SiPhp,
  SiXampp
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTrello />
      </Col>

      {/* WampServer alternative icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiXampp />
      </Col>

      {/* phpMyAdmin alternative icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp />
      </Col>

    </Row>
  );
}

export default Toolstack;
