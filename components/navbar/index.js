import { Navbar as BNavbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';
import { FaQuestionCircle } from 'react-icons/fa';
import styles from './navbar.module.css';


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
          <Nav.Link href="#faq" className={styles.navLink}>
            <FaQuestionCircle />
            <span>FAQ</span>
          </Nav.Link>
          <Nav.Link href="#faq" className={styles.navLink}>
            <FaInfoCircle />
            <span>About US</span>
          </Nav.Link>
        </Nav>
      </BNavbar.Collapse>
    </BNavbar>
  )
}