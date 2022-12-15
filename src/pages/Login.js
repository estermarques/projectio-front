import './Access.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <div className="access-page">
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="E-mail" />
        <Form.Text className="text-muted">
          O e-mail não será compartilhado com ninguém
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Senha" />
      </Form.Group>
      <div className='flex-separate'>
      <Button variant="primary" type="submit">
        Login
      </Button>
      </div>
      <div className='flex-separate'>
      <Button variant="secondary" type="submit">
        Cadastre-se
      </Button>
      </div>
    </Form>
    </div>
  );
}

export default Login;
