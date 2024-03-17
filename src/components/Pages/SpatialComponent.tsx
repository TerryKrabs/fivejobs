import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";

const SpatialComponent = () => {
  return (
    <div>
  <Container>
      <Row>
        <Col className="pt-5">
          <h1 style={{ justifyContent: "center", display: "flex"}}>Spatial Front Inc</h1>
          <h2 className="pt-4">Jr/Mid. API Developer</h2>
          <h3 className="pt-3">
        <li>$80K/yr - $115K/yr  Remote  Full-time  Entry level</li>
        <li> Experience with serverless architectures, particularly within the AWS ecosystem, including but not limited to Lambda, API Gateway, CloudFormation, S3, SNS, and SQS is preferred.</li>
        <li>Familiarity with Elastic Search and the ability to design and implement search-driven solutions is a plus.</li>
        <li>A Bachelors degree in Computer Science, Information Technology, or a closely related discipline is required.</li>
        <li>A minimum of 2 years of experience demonstrating a track record of success in software development for sophisticated applications in large-scale production environments.</li>
        <li></li>
          </h3>

          <h3
            className="pt-3"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Link to Company:{" "}
            <Link
              to="https://spatialfront.com/pages/index.html"
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

export default SpatialComponent
