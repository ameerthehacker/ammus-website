import { Navbar as BNavbar, Nav, NavDropdown } from 'react-bootstrap';

export default function Navbar() {
  return (
    <BNavbar variant="dark" fixed="top" expand="lg">
      <img height="40px" src="/logo.png" alt="brand-logo"/>
      <BNavbar.Brand className="ml-sm-2" href="#home">Ammus</BNavbar.Brand>
      <BNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavDropdown title="Products" id="basic-nav-dropdown">
            <NavDropdown.Item>Product1</NavDropdown.Item>
            <NavDropdown.Item>Product2</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#faq">FAQ</Nav.Link>
          <Nav.Link href="#about-us">About US</Nav.Link>
        </Nav>
      </BNavbar.Collapse>
    </BNavbar>
  )
}