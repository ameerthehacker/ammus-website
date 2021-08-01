import { Col, Container, Row } from 'react-bootstrap';
import styles from './highlights.module.css';

export default function Highlights() {
  return (
    <Container className="mt-3">
      <h1 id="highlights">
        Why choose us?
      </h1>
      <Row lg={2} xs={1} className="mt-2">
        <Col className="mt-3">
          <div className={styles.highlight}>
            <img src="/organic.png" />
            <h5 className="ml-2">
              Eco-friendly, natural and non-toxic
            </h5>
          </div>
        </Col>
        <Col className="mt-3">
          <div className={styles.highlight}>
            <img src="/safe-hands.png" />
            <h5 className="ml-2">
              Safe for your hands and machine
            </h5>
          </div>
        </Col>
        <Col className="mt-3">
          <div className={styles.highlight}>
            <img src="/no-virus.png" />
            <h5 className="ml-2">
              Kills 99.99% germs
            </h5>
          </div>
        </Col>
        <Col className="mt-3">
          <div className={styles.highlight}>
            <img src="/plant.png" />
            <h5 className="ml-2">
              Economical, vegan and cruelty-free
            </h5>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
