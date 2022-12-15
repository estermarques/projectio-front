import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import {faGear} from '@fortawesome/free-solid-svg-icons'
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function AccordionItem(props) {
  
  const EditLessons = (
    <Popover id="popover-basic">
    <Popover.Header as="h3">Edite uma lição</Popover.Header>
    <Popover.Body>
    <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Desafio Encontrado</Form.Label>
          <Form.Control type="email" placeholder="Qual desafio você encontrou?" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Link para solução</Form.Label>
        <Form.Control type="email" placeholder="Onde encontrou a solução?" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Como Chegou na solução?</Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>

      <Row>
        <Col>
        <Button variant="primary" type="submit">
        Salvar
      </Button>
      </Col>

      <Col>
        <Button variant="danger" type="submit">
        Deletar
      </Button>
      </Col>
      </Row>
    </Form>
    </Popover.Body>
  </Popover>
  )

  return (
      <Accordion.Item eventKey={props.eventKey}>
        <Accordion.Header>{props.title}</Accordion.Header>
        <Accordion.Body className="line-flex">
          <div >
          {props.text}
          <br />
          <a href="#">Onde aprendi: https://stackoverflow.com/</a>
          </div>
          <div>
          <OverlayTrigger trigger="click" placement="left" overlay={EditLessons}>
            <button className='icon-button'><FontAwesomeIcon  icon={faGear}/></button>
          </OverlayTrigger>
          </div>
        </Accordion.Body>
      </Accordion.Item>
  );
}

export default AccordionItem;