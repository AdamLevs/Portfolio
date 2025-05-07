import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiDocker, DiGit, DiPython } from "react-icons/di";
import { SiTerraform, SiKubernetes, SiJenkins, SiPrometheus, SiGrafana, SiAnsible, SiHelm, SiNginx, SiGithubactions, SiGnubash, SiPycharm, SiPostgresql, SiRedhatopenshift, SiPodman, SiApachekafka } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";

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
