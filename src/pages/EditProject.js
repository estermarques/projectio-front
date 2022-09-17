import './CreateProject.css';

function EditProject() {
  return (
    <div className="create-project-page">
      <h1 className="create-project-label">Edite seu projeto</h1>
      <input type="text" name="title" placeholder="Título" className="input"/>
      <input type="text" name="description" placeholder="Descrição" className="input"/>
      <input type="text" name="repositoryLink" placeholder="Link do repositório" className="input"/>
      <input type="text" name="stepsTaken" placeholder="Atividades realizadas no desenvolvimento do projeto" className="input"/>
      <input type="text" name="theme" placeholder="Tema. Ex: Testes automatizados" className="input"/>
      <input type="text" name="subject" placeholder="Matérias relacionadas" className="input"/>
      <button type="submit" className="blue-button">Editar lições aprendidas</button>
      <button type="submit" className="blue-button">Salvar</button>
    </div>
  );
}

export default EditProject;
