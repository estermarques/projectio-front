import './CreateProject.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function CreateLessonLearned(props) {
  
  return (
    <div className="choose-lesson-page">
      <Form>
      <Row>
        <Col>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Desafio Encontrado</Form.Label>
          <Form.Control type="email" placeholder="Qual desafio você encontrou?" />
        </Form.Group>
        </Col>
        <Col>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Link para solução</Form.Label>
        <Form.Control type="email" placeholder="Onde encontrou a solução?" />
      </Form.Group>
      </Col>
       
       
      </Row>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Como Chegou na solução?</Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Salvar
      </Button>
    </Form>
    </div>
  );
}

export default CreateLessonLearned;
