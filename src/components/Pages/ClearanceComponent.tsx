import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";


const ClearanceComponent = () => {
  return (
    <div>
        <Container>
      <Row>
        <Col className="pt-5">
          <h1 style={{ justifyContent: "center", display: "flex"}}>Clearance Jobs</h1>
          <h2 className="pt-4">Jr. Software Developer with Security Clearance</h2>
          <h3 className="pt-3">
        <li>$81.2K/yr - $146.9K/yr  On-site  Full-time  Entry level</li>
        <li> Specific experience with one or more of the following: Java/JEE, Python, C/C++, SQL, SOAP, WSDL, WADL</li>
        <li>Experience with User Interface development, knowledge of databases and structures, and/or experience working with XHTML, HTML, XML, XSLT</li>
        <li>Experience developing on Windows, and/or Linux operating systems.</li>
        <li>Experience with one or more of the following: Java, Python, PERL, PowerShell, VBS, Eclipse, Postgres, Oracle, Jenkins on a Windows platforms.</li>
        <li>Must have a strong understanding of sound software development principles and practices.</li>
        <li>Must be an independent thinker, capable of performing high quality work, both independently and with a team in a fast-moving environment.</li>
          </h3>

          <h3
            className="pt-3"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Link to Company:{" "}
            <Link
              to="https://www.clearancejobs.com/registration?utm_source=google&utm_medium=cpc&utm_campaign=83735994&utm_content=3527686434&utm_term=clearancejobs&gad_source=1&gclid=Cj0KCQjw-r-vBhC-ARIsAGgUO2AwM5R1tTOyxLdGmm5e4MS9qIri2WXhT_y34oqUHFOv7Lf9NWdBgu0aArGfEALw_wcB"
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

export default ClearanceComponent
