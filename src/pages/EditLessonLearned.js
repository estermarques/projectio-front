import './CreateProject.css';

function EditLessonLearned(props) {
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

  const createLL = () => {
    const challenge = (document.getElementById('challenge').value);
    const solution = (document.getElementById('solution').value);
    const studyLinks = (document.getElementById('studyLinks').value);

    const obj = {
      challenge,
      solution,
      studyLinks,
      id: props.lessonLearnedId
    };

    fetch("https://v93r9d3h1j.execute-api.us-east-1.amazonaws.com/dev/lessonLearned", {
      "method": "PUT",
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

  const deleteLL = () => {
    const obj = {
      id: props.lessonLearnedId
    };

    fetch("https://v93r9d3h1j.execute-api.us-east-1.amazonaws.com/dev/lessonLearned", {
      "method": "DELETE",
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
      <button type="submit" className="blue-button" onClick={deleteLL}>Apagar lição aprendida</button>
      <button type="submit" className="blue-button" onClick={createLL}>Salvar</button>
    </div>
  );
}

export default EditLessonLearned;
