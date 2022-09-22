import './CreateProject.css';

function EditProject() {
  const editPrj = () => {
    const title = (document.getElementById('title').value);
    const description = (document.getElementById('description').value);
    const repositoryLink = (document.getElementById('repositoryLink').value);
    const stepsTaken = (document.getElementById('stepsTaken').value);
    const theme = (document.getElementById('theme').value);
    const subject = (document.getElementById('subject').value);
    const userId="123";

    const obj = {
      title,
      description,
      repositoryLink,
      stepsTaken,
      theme,
      subject,
      userId,
    };

    fetch("https://v93r9d3h1j.execute-api.us-east-1.amazonaws.com/dev/project", {
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

  return (
    <div className="create-project-page">
      <h1 className="create-project-label">Edite seu projeto</h1>
      <input type="text" name="title" placeholder="Título" className="input" id="title"/>
      <input type="text" name="description" placeholder="Descrição" className="input" id="description"/>
      <input type="text" name="repositoryLink" placeholder="Link do repositório" className="input" id="repositoryLink"/>
      <input type="text" name="stepsTaken" placeholder="Atividades realizadas no desenvolvimento do projeto" className="input" id="stepsTaken"/>
      <input type="text" name="theme" placeholder="Tema. Ex: Testes automatizados" className="input" id="theme"/>
      <input type="text" name="subject" placeholder="Matérias relacionadas" className="input" id="subject"/>
      <button type="submit" className="blue-button">Editar lições aprendidas</button>
      <button type="submit" className="blue-button" onClick={editPrj}>Salvar</button>
    </div>
  );
}

export default EditProject;
