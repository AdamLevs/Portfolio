import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Project images
import statusPageImg from "../../Assets/Projects/statuspage.png";
import cloudOpsFrameworkImg from "../../Assets/Projects/blog.png";

function Projects() {
  const projectList = [
    {
      imgPath: statusPageImg,
      title: "Status-page",
      description:
        "A self-hosted status page app that monitors HTTP, ICMP, TCP, servers, and DNS services using FastAPI, Celery, and PostgreSQL. Includes a React dashboard, Redis, and Docker support for easy deployment and real-time updates.",
      ghLink: "https://github.com/AdamLevs/Status-page.git",
      demoLink: "https://status.adamlevs.com/",
    },
    {
      imgPath: cloudOpsFrameworkImg,
      title: "CloudOps-Framework",
      description:
        "A Terraform framework that deploys a full AWS Kubernetes stack (EKS, RDS, ECR, Redis, VPC). Uses Jenkins for building and pushing container images, and ArgoCD for automated GitOps-based deployments with Helm charts and monitoring.",
      ghLink: "https://github.com/AdamLevs/K8s-wordpress-sql.git",
    },
    {
      imgPath: cloudOpsFrameworkImg,
      title: "AWS CLI Tool",
      description:
        "A Python CLI tool to manage AWS services including EC2, S3, and Route53. Supports creating, updating, and deleting instances, buckets, and hosted zones directly from the command line.",
      ghLink: "https://github.com/AdamLevs/aws-multi-service-cli.git",
    },
    {
      imgPath: cloudOpsFrameworkImg,
      title: "flask-dockerized",
      description:
        "A basic Flask web app in Python that returns a message at the root URL. It’s containerized with Docker for easy deployment and environment consistency.",
      ghLink: "https://github.com/AdamLevs/flask-dockerized.git",
    },
    {
      imgPath: cloudOpsFrameworkImg,
      title: "K8s-wordpress-sql",
      description:
        "This project deploys a WordPress site with a MySQL backend using Kubernetes manifests. It demonstrates container orchestration and service exposure in a fully automated local K8s environment.",
      ghLink: "https://github.com/AdamLevs/K8s-wordpress-sql.git",
    },
    // Add more projects here as needed
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectList.map((project, idx) => (
            <Col md={4} className="project-card" key={idx}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;