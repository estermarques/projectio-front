import './CreateProject.css';

function CreateProject() {
  return (
    <div className="create-project-page">
      <h1 className="create-project-label">Adicione as informações do seu novo projeto</h1>
      <input type="text" name="title" placeholder="Título" className="input"/>
      <input type="text" name="description" placeholder="Descrição" className="input"/>
      <input type="text" name="repositoryLink" placeholder="Link do repositório" className="input"/>
      <input type="text" name="stepsTaken" placeholder="Atividades realizadas no desenvolvimento do projeto" className="input"/>
      <input type="text" name="theme" placeholder="Tema. Ex: Testes automatizados" className="input"/>
      <input type="text" name="subject" placeholder="Matérias relacionadas" className="input"/>
      <button type="submit" className="blue-button">Salvar</button>
    </div>
  );
}

export default CreateProject;
