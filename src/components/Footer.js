import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  const [status, setStatus] = useState("Checking...");

  useEffect(() => {
    fetch("https://status.adamlevs.com/api/status")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "up") {
          setStatus("✅ All Systems Operational");
        } else {
          setStatus("🔴 Some Systems Down");
        }
      })
      .catch(() => {
        setStatus("⚠️ Status Unavailable");
      });
  }, []);

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright" style={{ textAlign: "center" }}>
          <p>
            <a
              href="https://github.com/soumyajit4419/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", textDecoration: "none", position: "relative", zIndex: 10 }}
            >
              Designed and Developed by Soumyajit Behera
            </a>
          </p>
        </Col>
        <Col md="4" className="footer-copywright" style={{ textAlign: "center" }}>
          <h3>Copyright © {year} SB</h3>
        </Col>
        <Col md="4" className="footer-body" style={{ textAlign: "center" }}>
          <a
            href="https://status.adamlevs.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", textDecoration: "none" }}
          >
            {status}
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;