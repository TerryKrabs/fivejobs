import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";

const InsightComponent = () => {
  return (
    <div>
      <Container>
      <Row>
        <Col className="pt-5">
          <h1 style={{ justifyContent: "center", display: "flex"}}>Insight</h1>
          <h2 className="pt-4">Jr/Mid .NET Developer</h2>
          <h3 className="pt-3">
        <li> $85K/yr - $10 5K/yr  Remote Full-time  Associate</li>
        <li>1,001-5,000 employees</li>
        <li>1-4 years of experience using .NET Core 5+</li>
        <li>1-4 years of experience with cross-platform mobile development</li>
        <li>Experience using .NET Maui Blazor and React</li>
        <li>Excellent communication skills</li>
          </h3>

          <h3
            className="pt-3"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Link to Company:{" "}
            <Link
              to="https://insightglobal.com/"
              target="_blank"
            >
              Click Here
              
            </Link>
          </h3>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default InsightComponent
