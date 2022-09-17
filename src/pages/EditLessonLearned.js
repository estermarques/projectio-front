import './CreateProject.css';

function EditLessonLearned() {
  return (
    <div className="create-project-page">
      <h1 className="create-project-label">Lição aprendida</h1>
      <input type="text" name="challenge" placeholder="Problema encontrado" className="input"/>
      <input type="text" name="solution" placeholder="Solução" className="input"/>
      <input type="text" name="studyLinks" placeholder="Links onde você estudou sobre o problema" className="input"/>
      <button type="submit" className="blue-button">Salvar</button>
    </div>
  );
}

export default EditLessonLearned;
