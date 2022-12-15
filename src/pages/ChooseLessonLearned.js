import './CreateProject.css';
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from '../components/accordionComponent'

function ChooseLessonLearned(props) {
  const getAllLeassons = () => {
    const obj = {
      //! arrumar um jeito de pegar o id do projeto aberto
      projectId: props.projectId,
    };

    fetch("https://v93r9d3h1j.execute-api.us-east-1.amazonaws.com/dev/lessonLearned/", {
      "method": "GET",
      "queryStringParameters": JSON.stringify(obj)
    })
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err);
    });
  }

  const getLeassonLearned = (id) => {
    const obj = {
      //! arrumar um jeito de pegar do botão que eu clicar (id da lição aprendida)
      id,
    };

    fetch("https://v93r9d3h1j.execute-api.us-east-1.amazonaws.com/dev/lessonLearned/", {
      "method": "GET",
      "queryStringParameters": JSON.stringify(obj)
    })
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err);
    });
  }

  return (
    <div className='choose-lesson-page'>
      <Accordion>
        <AccordionItem eventKey={0} title="Eu precisava descobrir como acabar o TCC em pouco tempo" text="Eu usei a força do ódio, ta funcionando bem."/>
        <AccordionItem eventKey={1} title="Eu precisava descobrir como acabar o TCC em pouco tempo" text="Eu usei a força do ódio, ta funcionando bem."/>
      </Accordion>
    </div>
    
  );
}

export default ChooseLessonLearned;
