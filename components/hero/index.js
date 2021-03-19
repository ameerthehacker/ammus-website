import { Button } from 'react-bootstrap';
import styles from './hero.module.css';

export default function Hero() {
  return (
    <div className={styles.container}>
      <h1>
        Welcome to SASO
      </h1>
      <p>
        Organic, Deep Clean, and Improve <strong>Lifespan</strong> of your machine: Our special <strong>product for household</strong> laundry machine provides uncompromising cleanliness.
      </p>
      <Button variant="outline-warning" size="lg">View Products</Button>
    </div>
  )
}
