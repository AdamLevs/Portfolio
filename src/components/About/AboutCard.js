import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import CertCarousel from "./CertCarousel";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I'm <span className="purple">Adam Lev</span> from{" "}
            <span className="purple">Israel</span>.
            <br />
            I'm currently working as a NOC operator at{" "}
            <a
              href="https://we-com.co.il/%d7%90%d7%95%d7%93%d7%95%d7%aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="purple"
            >
              We-com
            </a>
            .
            <br />
            I'm currently preparing for the{" "}
            <span className="purple">
              AWS Certified DevOps Engineer – Professional
            </span>{" "}
            and{" "}
            <span className="purple">
              CKA (Certified Kubernetes Administrator)
            </span>{" "}
            certifications, while continuously building hands-on skills in
            DevOps and cloud technologies.
            <br />
            I’ve also recently started a{" "}
             Bachelor’s degree in
            <span className="purple"> Computer Science</span> at the{" "}
            Open University of Israel.
            <br />
            <br />
            Apart from coding, here are some activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Financial Blogs
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