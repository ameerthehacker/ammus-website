import { useEffect, useState } from 'react';
import { Navbar as BNavbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaBroom, FaInfoCircle } from 'react-icons/fa';
import { FaQuestionCircle } from 'react-icons/fa';
import styles from './navbar.module.css';


export default function Navbar() {
  const [bg, setBg] = useState("transparent");

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 30) {
        setBg("light");
      } else {
        setBg("transparent");
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, []);

  return (
    <BNavbar bg={bg} variant={bg === "transparent"? "dark": "light"} fixed="top" expand="lg">
      <img height="40px" src="/logo.png" alt="brand-logo"/>
      <BNavbar.Brand className="ml-sm-2" href="#home">Ammus</BNavbar.Brand>
      <BNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#products" className={styles.navLink}>
            <FaBroom />
            <span>Products</span>
          </Nav.Link>
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