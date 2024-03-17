import { Link } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";


const AkrayaComponent = () => {
  return (
    <div>
       <Container>
      <Row>
        <Col className="pt-5">
          <h1 style={{ justifyContent: "center", display: "flex"}}>Akraya</h1>
          <h2 className="pt-4">Drupal/PHP Developer</h2>
          <h3 className="pt-3">
        <li>  $55/hr - $60/hr  Hybrid  Full-time  Entry level</li>
        <li> Primary Skills: Drupal, PHP, Javascript, Angular</li>
        <li>Duration: 6 Months + (Possible extension for the right candidate)</li>
        <li>Location: Fremont, CA (ONLY ONSITE)</li>
        <li>Hybrid developer with PHP knowledge, open to learn Drupal and work on our CMS solution. Candidate should also have some knowledge of UI skillsets like Javascript, CSS.
strong fundamental, eager to learn and grow into the roleGreat if candidate has some angular exposure.</li>
          </h3>

          <h3
            className="pt-3"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Link to Company:{" "}
            <Link
              to="https://www.akraya.com/"
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

export default AkrayaComponent
