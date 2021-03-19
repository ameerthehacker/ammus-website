import { Accordion, Card, Button, Container } from 'react-bootstrap';

export default function FAQ() {
  return (
    <Container id="faq" className="mt-5">
      <h1>FAQ</h1>
      <Accordion className="mt-3" defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              1. What exactly is SASO Hygiene Washing Machine Cleaner?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              Chemical free, organic Washing-Machine Hygiene (Drum) Cleaner with Activated
              Carbon, eliminate dirt and fluff can perform a thorough deep cleaning. Improve lifespan
              of your washing machine.
              <h5 className="mt-2">4 in 1 action packed formula</h5>
              <ul>
                <li>Against bacteria and fungus</li>
                <li>Descales</li>
                <li>Sanitise</li>
                <li>Removes Odours</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              2. Are “SASO Hygiene Cleaner” ingredients are bio- degradable?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
            Yes, our SASO powder is biodegradable. It’s very important to us that our products are safe for the environment.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
            3. Why should I use washing machine cleaner such as SASO hygiene mix cleaner in my
            washing machine?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
            Your hygiene cleaner needs to kill harmful germs and act against bacteria of your washing
            machine. SASO hygiene cleaner is specially formulated to disperse fluffs, dirt and small particles
            settled inside your washing machine.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
            4. Is Activated Carbon harmful for my machine? Does it build up inside the machine?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
            It is solid in nature; Activated Carbon has no grinding or rubbing effect and does not damage
            the surfaces of the washing machine, pipes or seals. Due to its light weight there is no risk to
            build up inside the machine – it will be drained.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
            5. Can I also start a hot-water wash cycle with 90-95 °C together with SASO HygieneWashing-Machine Cleaner?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
            Of course, because the higher the temperature during the cleaning of the washing machine
            is, the better the results will be.
            In top loading machine if hot water setting’s facility if available then set the washing cycle
            for 30 mints, setting temperature at 70 degree. If this facility is not available adding hot
            water is recommendable but not mandatory.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
            6. Is it useful for any particular brand of washing machine?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
            Used in all company/brands washing machines/
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  )
}
