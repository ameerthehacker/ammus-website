import { Container, Card } from 'react-bootstrap';
import styles from  './product.module.css';

const PRODUCTS = [{
  title: 'WASHING MACHINE HYGIENE CLEANER CUM SANITIZER',
  image: '/saso-washing-machine-powder.jpg',
  description: (
    <ul className={styles.productDescription}>
      <li>4 in 1 Power: Anti-Bacterial Descales, Sanitises &amp; Deodorises.</li>
      <li>Its dirt lift action packed formula with activation carbon.</li>
      <li>Increase the lifespan of your washing machine as it removes fluff.</li>
      <li>Once the washing program is over the Machine is ready for immediate use.</li>
    </ul>
  )
}, {
  title: 'ORGANIC BRASS/COPPER/SILVER/GOLD SHININER CUM CLEANER',
  image: '/copper-brass-cleaner.jpeg',
  description: (
    <div className={styles.productDescription}>
      <p>
        Brass, copper, silver and metals utensil can become dull and tarnished over a period
        of time. Clean everything from <strong> brass, copper,</strong> metals and other kitchen utensils
        around your home quickly and easily with our SASO Organic herbal brass, copper
        cleaner.
      </p>
      <p>
        This non –hazardous, specially formulated cleaning solution will restore tarnished
        brass, copper, silver and metal utensils easily with your bare hands. The finest
        ingredients rejuvenates dull &amp; tarnished surface by removing tarnish and polishing to
        an excellent shine. Its Ammonia free non-scratch formula allows safe use and it
        restores the original brilliance to surfaces.
      </p>
    </div>
  )
}, {
  title: 'ORGANIC COCONUT COIR SCRUBBING PADS',
  image: '/scrub.jpeg',
  description: (
    <ul className={styles.productDescription}>
      <li>Soft, natural, excellent for scrubbing effortlessly.</li>
      <li>Cleans better, lasts longer and comfortable/easy grip</li>
      <li>Plant-based &amp; Food safe.</li>
      <li>100% biodegradable(They return to serve nature)</li>
      <li>100% Eco Friendly, safe for your hands and nails</li>
    </ul>
  )
}, {
  title: 'ORGANIC HERBAL LIQUID DETERGENT',
  image: '/liquid-detergent.jpeg',
  description: (
    <div className={styles.productDescription}>
      <p>
        Plant derived liquid laundry detergent is completely safe for gentle cleaning of your laundry.
        Its natural ingredients and bio-enzymes that help in the breakdown of dirt and oil,
        prevents the growth of bacteria.
      </p>
    </div>
  )
}, {
  title: 'ORGANIC MOSQUITO REPELLENT ROOM OR BODY SPRAY',
  image: '/mosquito-repellent.jpeg',
  description: (
    <ul className={styles.productDescription}>
      <li>Repels mosquitoes that may transmit the Chikungunya, Zika, Dengue and Malaria.</li>
      <li>Repels mosquitoes for up to 6 hours</li>
      <li>Refreshing soothing scent</li>
      <li>No fumes, No fuss, No discomfort</li>
      <li>100% safe to human skin</li>
      <li>Environment –friendly</li>
      <li>Effective both indoors and outdoors</li>
    </ul>
  )
}, {
  title: 'ORGANIC HERBAL DISH WASH LIQUID',
  image: '/dish-wash.jpeg',
  description: (
    <ul className={styles.productDescription}>
      <li>Plant Derived</li>
      <li>Excellent Grease Cutting Power</li>
      <li>Anti-Bacterial</li>
      <li>Soft to hand due to Veg.Glycerin</li>
      <li>Easy to Rinse</li>
      <li>Non Toxic: Zero harm to Human and Nature</li>
    </ul>
  )
}, {
  title: 'ORGANIC NEEMYL HERBAL FLOOR CLEANER',
  description: (
    <div className={styles.productDescription}>
      <p>
        A biodegradable herbal blend powered by natural anti-microbial agent Enriched
        with the power of Neem Oil, Tea tree oil, Clove oil, Eucalyptus oil, Cinnamon oil,
        Cintronella oil, Thymol, Camphor and Hydrogen Peroxide. This is a multipurpose
        disinfectant Cleaner works well on marble, tiles, granite, and laminate floors. A
        refreshing and calming blend of herbal essence leaves a pleasant and soothing
        scent.
        Equal quantities of SASO Organic NEEMYL HERBAL FLOOR CLEANER and
        water sprayed on surfaces works as an excellent repellent for mosquitos and flies
      </p>
    </div>
  )
}, {
  title: 'ORGANIC HERBAL HAND WASH',
  description: (
    <div className={styles.productDescription}>
      <p>
        A blend of rare organic herbs and
        other natural ingredients eliminate germs but soft on your skin. Its low foaming
        technology saves water considerably and drain water is biodegradable in nature.
      </p>
    </div>
  )
}]

function Product({ title, description, image }) {
  return (
    <Card style={{ width: "18rem" }}>
      {image && <Card.Img variant="top" style={{ width: "100%", height: "auto" }} src={image} />}
      <Card.Body>
        <Card.Title as="h6">{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default function Products() {
  return (
    <Container className="mt-3" id="products">
      <h1>
        Products
      </h1>
      <div className="flex flex-wrap">
        {
          PRODUCTS.map((product, index) => (
            <div key={index} style={{ padding: "5px" }}>
              <Product {...product} />
            </div>
          ))
        }
      </div>
    </Container>
  )
}
