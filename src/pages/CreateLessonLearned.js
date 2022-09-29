import './CreateProject.css';

function CreateLessonLearned(props) {
  const createLL = () => {
    const challenge = (document.getElementById('challenge').value);
    const solution = (document.getElementById('solution').value);
    const studyLinks = (document.getElementById('studyLinks').value);

    const obj = {
      challenge,
      solution,
      studyLinks,
      projectId: props.projectId
    };

    fetch("https://v93r9d3h1j.execute-api.us-east-1.amazonaws.com/dev/lessonLearned", {
      "method": "POST",
      "body": JSON.stringify(obj)
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
      <h1 className="create-project-label">Lição aprendida</h1>
      <input type="text" name="challenge" placeholder="Problema encontrado" className="input" id="challenge"/>
      <input type="text" name="solution" placeholder="Solução" className="input" id="solution"/>
      <input type="text" name="studyLinks" placeholder="Links onde você estudou sobre o problema" className="input" id="studyLinks"/>
      <button type="submit" className="blue-button" onClick={createLL}>Salvar</button>
    </div>
  );
}

export default CreateLessonLearned;
