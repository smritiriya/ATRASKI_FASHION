import {React,useState} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { logo } from "../assets";



function Header() {
    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
      setShow(!show);
    };
    const hideDropdown = (e) => {
      setShow(false);
    };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>

          <Nav>
            <Nav.Link href="#features">EVENTS</Nav.Link>
            <Nav.Link href="#pricing" style={{border:"2px solid white"}}>FASHION</Nav.Link>
            <Nav.Link href="#pricing">TRAVEL</Nav.Link>
            <Nav.Link href="#pricing">MCVC</Nav.Link>
            <Nav.Link href="#pricing">AT BUZZ</Nav.Link>
            <Nav.Link href="#pricing">WEDDINGS</Nav.Link>
            <NavDropdown
              title=""
              id="collasible-nav-dropdown"
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
              class=""
            >
              <NavDropdown.Item href="#action/3.1">Nothing in cart</NavDropdown.Item>
           
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
