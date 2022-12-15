import './Access.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Registration() {
  let successMessage = document.querySelector(".success-message");

  const createUser = () => {
    const email = (document.getElementById('email').value);
    const name = (document.getElementById('name').value);
    const isProfessor = (!!document.getElementById('isProfessor').value);

    const obj = {
      name,
      email,
      isProfessor,
    };

    fetch("https://v93r9d3h1j.execute-api.us-east-1.amazonaws.com/dev/user", {
      "method": "POST",
      "body": JSON.stringify(obj)
    })
    .then(response => response.json())
    .then(response => {
      console.log(response)
      successMessage.style.display = "flex";
    })
    .catch(err => {
      console.log(err);
    });
  }

  //! Exibir mensagem “Usuário criado com sucesso”

  return (
    <div className="access-page">
       <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="name" placeholder="Nome" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Endereço de Email</Form.Label>
        <Form.Control type="email" placeholder="E-mail" />
        <Form.Text className="text-muted">
          O e-mail não será compartilhado com ninguém
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Senha" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Confirme sua senha</Form.Label>
        <Form.Control type="password" placeholder="Digite a senha mais uma vez" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Sou um professor" />
      </Form.Group>
      <div className='flex-separate'>
      <Button variant="primary" type="submit">
        Cadastre-se
      </Button>
      </div>
    </Form>
    </div>
  );
}

export default Registration;
