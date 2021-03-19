import { Col, Container, Row } from 'react-bootstrap';
import { FaEnvelope, FaFacebook, FaPhoneAlt } from 'react-icons/fa';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <div id="aboutus" className={`mt-4 ${styles.footer}`}>
      <Container className={styles.footerContainer}>
        <Row>
          <Col>
            Manufacturer / Packer Details
            <br />
            Ammu’s Laboratories
            <br />
            Punalur, Kollam, Kerala. 691331
          </Col>
          <Col>
            <div className={styles.detailsContainer}>
              <div>
                <div className={styles.detail}>
                  <FaPhoneAlt />
                  <span>00917510690021</span>
                </div>
                <div className={styles.detail}>
                  <FaEnvelope />
                  <span>
                    <a href="mailto:sasowmc@gmail.com">
                      sasowmc@gmail.com
                    </a>
                  </span>
                </div>
                <div className={styles.detail}>
                  <FaFacebook />
                  <span>
                    <a href="https://www.facebook.com/amreenfathima.hussain">
                      facebook
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
