import './CreateProject.css';
import LessonLearned from '../components/LessonLearned';

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
    <div className="create-project-page">
      <h1 className="create-project-label">Lições aprendidas do projeto</h1>
      <button className="lesson-learned-btn" onClick={getLeassonLearned} id="temporario">
      <LessonLearned
        challenge="um desafio"
        solution="eu mesma"
        studyLinks="http://localhost:3000/"
      />
      </button>
      <button type="submit" className="blue-button">Adicionar nova</button>
    </div>
  );
}

export default ChooseLessonLearned;
