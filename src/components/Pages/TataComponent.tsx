import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";

const TataComponent = () => {
  return (
    <div>
  <Container>
      <Row>
        <Col className="pt-5">
          <h1 style={{ justifyContent: "center", display: "flex"}}>Tata Consultancy Services</h1>
          <h2 className="pt-4">UI/UX Developer</h2>
          <h3 className="pt-3">
        <li>Javascript , HTML , CSS</li>
        <li> Proficient in creating visually appealing user interfaces with a strong focus on user experience and usability.</li>
        <li>Experience in designing responsive and cross-browser user interfaces to ensure a consistent experience across various devices and platforms.</li>
        <li>Proficiency in using tools like Sketch or Adobe XD or Figma, or similar for creating wireframes and interactive prototypes</li>
        <li>Strong skills in HTML, CSS, and JavaScript for implementing designs into functional, interactive web applications.</li>
        <li>Familiarity with version control systems, such as Git, to collaborate efficiently with development teams and track changes in design iterations.</li>
        <li>Create wireframes, prototypes, and visual designs that align with user needs and project requirements.</li>
          </h3>

          <h3
            className="pt-3"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Link to Company:{" "}
            <Link
              to="https://www.tcs.com/"
              target="_blank"
            >
              Click Here
              
            </Link>
          </h3>
        </Col>
      </Row>
    </Container>    </div>
  )
}

export default TataComponent
