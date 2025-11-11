import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import CertCarousel from "./CertCarousel";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", whiteSpace: "pre-line" }}>
            Hi everyone, I'm <span className="purple">Adam Lev</span> from{" "}
            <span className="purple">Israel</span>.
            {"\n"}
            I'm currently working as a Software Engineer at{" "}
            <a
              href="https://markito.tv"
              target="_blank"
              rel="noopener noreferrer"
              className="purple"
            >
              Markito
            </a>
            ,
            {"\n"}
            using multiple code languages like:{" "}
            <span className="purple">Python, GO, JavaScript.</span>
            {"\n"}
            Currently preparing for the{" "}
            <span className="purple">
              AWS Certified DevOps Engineer – Professional
            </span>{" "}
            and{" "}
            <span className="purple">
              CKA (Certified Kubernetes Administrator)
            </span>{" "}
            certifications, while continuously building hands-on skills in
            DevOps and cloud technologies.
            {"\n"}
            I’ve also recently started a Bachelor’s degree in{" "}
            <span className="purple">Computer Science</span> at the{" "}
            Open University of Israel.
            {"\n\n"}
            Apart from coding, here are some activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Motorcycle riding
            </li>
            <li className="about-activity">
              <ImPointRight /> Working out
            </li>
            <li className="about-activity">
              <ImPointRight /> MMA Fighting
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;