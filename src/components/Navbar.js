import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavbarComponent() {
  return (
    <Navbar key={'xx1'} bg="white" expand={'xx1'} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#">Project.io</Navbar.Brand>
        <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Cadastre-se</Nav.Link>
              <Nav.Link href="#action2">Login</Nav.Link>
            </Nav>
        <Navbar.Toggle aria-controls={'offcanvasNavbar-expand-xx1'} />
        <Navbar.Offcanvas
          id={'offcanvasNavbar-expand-xx1'}
          aria-labelledby={'offcanvasNavbarLabel-expand-xx1'}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={'offcanvasNavbarLabel-expand-xx1'}>
              Pesquise por projetos
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form className="d-flex">
              {/* Quebrar linha para cada area de texto e botão */}
              <Form.Control
                type="search"
                placeholder="Título"
                className="me-2"
                aria-label="Título"
              />
              <Form.Control
                type="search"
                placeholder="Assunto"
                className="me-2"
                aria-label="Assunto"
              />
              <Form.Control
                type="search"
                placeholder="Autor"
                className="me-2"
                aria-label="Autor"
              />
              <Button variant="outline-success">Pesquisar</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;