import './ViewProject.css';
import './CreateProject.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'; 
import Button from 'react-bootstrap/Button';
import ButtonWithDelete  from '../components/buttonWithDelete';
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from '../components/accordionComponent'
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import CommentUnit from "../components/commentUnit"
import SearchDropdown from "../components/searchDropdown"


function ViewProject(props) {

  const LessonPopover = (
    <Popover id="popover-basic">
    <Popover.Header as="h3">Crie uma nova lição</Popover.Header>
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

      <Button variant="primary" type="submit">
        Salvar
      </Button>
    </Form>
    </Popover.Body>
  </Popover>
  )
  
  const ThemePopover = (
    <Popover id="popover-basic">
    <Popover.Header as="h3">Crie uma nova lição</Popover.Header>
    <Popover.Body>
      <SearchDropdown items={["t1", "t2"]}/>
    </Popover.Body>
  </Popover>
  )

  const Themes = (
    <>
    <h2>Temas relacionados
      <OverlayTrigger trigger="click" placement="right" overlay={ThemePopover}>
      <button href="#" className='icon-button'><FontAwesomeIcon  icon={faPlus}/></button>
      </OverlayTrigger>
      </h2>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
       
    
        <br/>
        <ButtonWithDelete title="Testes automatizados" variant="info"/>
      </Form.Group>
      </Form>
      </>
  )


  const SubjectRelations = (
    <>
    <h2>Disciplinas Relacionadas
      <OverlayTrigger trigger="click" placement="right" overlay={ThemePopover}>
      <button href="#" className='icon-button'><FontAwesomeIcon  icon={faPlus}/></button>
      </OverlayTrigger>
      </h2>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
       
    
        <br/>
        <ButtonWithDelete title="Engenharia de Software" variant="info"/>
        <ButtonWithDelete title="Banco de Dados" variant="info"/>
        <ButtonWithDelete title="Prog Web" variant="info"/>
      </Form.Group>
      </Form>
      </>
  )
  
  //! Exibir mensagem “Projeto deletado com sucesso”.
  return (
    <div className='choose-lesson-page pb-5'>
      <h2>Sobre o Projeto</h2>
      <div className="create-project-page">
      <Form>
        <Row>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Autor</Form.Label>
            <Form.Control type="email" placeholder="Autor do Projeto" />
          </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Título</Form.Label>
            <Form.Control type="email" placeholder="Título do projeto" />
          </Form.Group>
          </Col>
        </Row>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Link</Form.Label>
        <Form.Control type="email" placeholder="Link para o repositório do seu projeto" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descrição do Projeto</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <div className="mr-1"><Button className='p'>Salvar</Button>{"      "}<Button variant='danger'>Deletar</Button> </div>

    </Form>
    <hr/>
    {Themes}
    <hr/>
    {SubjectRelations}
    </div>
    <hr/>
    <h2>Lições aprendidas 
    <OverlayTrigger trigger="click" placement="right" overlay={LessonPopover}>
    <button onClick={()=>{}} className='icon-button'><FontAwesomeIcon  icon={faPlus}/></button>
  </OverlayTrigger>
    </h2>
    <div className='pb-4'>
      <Accordion>
        <AccordionItem eventKey={0} title="Eu estava tendo que repetir meus testes várias vezes" text="Aprendi a fazer testes automatizados."/>
      </Accordion>
    </div>
    <hr/>
    <h2>Comentários</h2>
    <Form>
        <Row>
          <Col  xs="11">
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={5} />
          </Form.Group>
          </Col>
          <Col  xs="1">
            <Button variant="primary" type="submit">
              Comentar
            </Button>
          </Col>
        </Row>
      <CommentUnit/>
      <CommentUnit/>
      <CommentUnit/>
    </Form>
    </div>
  );
}

export default ViewProject;
