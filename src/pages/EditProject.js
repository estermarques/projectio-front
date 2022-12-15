import './CreateProject.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CreateProject() {
 

  return (
    <div className="choose-lesson-page">
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Título do Projeto</Form.Label>
        <Form.Control type="email" placeholder="Título" />
        <Form.Text className="text-muted">
          O titulo do seu projeto
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Link do Repositório</Form.Label>
        <Form.Control type="email" placeholder="Link" />
        <Form.Text className="text-muted">
          O link para o repositório do seu projeto
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descrição do Projeto</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Temas do Projeto</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Matérias Relacionadas</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Salvar
      </Button>
    </Form>
    </div>
  );
}

export default CreateProject;
