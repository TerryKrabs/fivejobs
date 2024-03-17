import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>5 Jobs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Akraya</Nav.Link>
            <Nav.Link as={Link} to='/Clearance'>Clearance</Nav.Link>
            <Nav.Link as={Link} to='/Insight'>Insight Global</Nav.Link>
            <Nav.Link as={Link} to='/Spatial'>Spatial</Nav.Link>
            <Nav.Link as={Link} to='/Tata'>Tata Consultancy</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;