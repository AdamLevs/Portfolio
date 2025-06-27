import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/statuspage.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Status-page"
              description="tracking and displaying the operational status of service/web/application/infrastructure, by using AWS, K8s, Terraform, Helm, Jenkins, Argocd, PostgreSQL, Redis and Python"
              ghLink="https://github.com/AdamLevs/Status-page.git"
              demoLink="https://statuspage.adamlevs.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="WordPress application"
              description="Kubernetes configurations for deploying a WordPress application with a MySQL database. It provides the necessary YAML files for creating and managing the Kubernetes resources required to run WordPress."
              ghLink="https://github.com/AdamLevs/K8s-wordpress-sql.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="AWS CLI tool"
              description="CLI tool allows you to manage AWS services including EC2, S3, and Route53. It provides a command-line interface to create and manage EC2 instances, S3 buckets, and Route53 domains."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="http://aws-cli-tool.adamlevs.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
