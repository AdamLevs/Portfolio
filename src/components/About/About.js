import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import CertCarousel from "./CertCarousel";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* About & Certifications side-by-side layout */}
        <Row className="about-content-row" style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            lg={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>

          {/* Certificate carousel on the right - smaller width to avoid overlapping text */}
          <Col
            lg={5}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="cert-column"
          >
            <CertCarousel />
          </Col>
        </Row>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
      </Container>
    </Container>
  );
}

export default About;
