import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiDocker, DiGit, DiPython, DiGo, DiJavascript1 } from "react-icons/di";
import {
  SiTerraform,
  SiKubernetes,
  SiJenkins,
  SiPrometheus,
  SiGrafana,
  SiAnsible,
  SiHelm,
  SiGnubash,
  SiPostgresql,
  SiRedhatopenshift,
  SiPodman,
  SiContabo,
} from "react-icons/si";
import { FaAws, FaMicrosoft, FaShieldAlt } from "react-icons/fa";

function DevOpsTechstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaMicrosoft /> {/* Azure */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiContabo /> {/* Contabo */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaShieldAlt /> {/* Security / MITM */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrometheus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGrafana />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnsible />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHelm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnubash />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGo />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedhatopenshift />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPodman />
      </Col>
    </Row>
  );
}

export default DevOpsTechstack;