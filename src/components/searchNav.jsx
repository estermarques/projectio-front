
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './searchNav.css';

function SearchNav(props) {

  
  return (
    <Navbar bg="light" expand="lg" className={`search-nav ${props.toggled ? "active-navbar" : "hidden-navbar"}`}>
      <Container>
          <Form className="d-flex">
            
            <Form.Control
              type="search"
              placeholder="Titulo"
              className="me-2"
              aria-label="Search"
            />
            <Form.Control
              type="search"
              placeholder="Autor"
              className="me-2"
              aria-label="Search"
            />
            <Form.Select>
              <option disabled selected className='disabled-select'>Matéria</option>
              <option>Engenharia de Software</option>
              <option>Compiladores</option>
            </Form.Select>
            <Button className='p'>Pesquisar</Button>
          </Form>
      </Container>
    </Navbar>
  );
}

export default SearchNav;