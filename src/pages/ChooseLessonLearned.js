import './CreateProject.css';
import LessonLearned from '../components/LessonLearned';

function ChooseLessonLearned() {
  return (
    <div className="create-project-page">
      <h1 className="create-project-label">Lições aprendidas do projeto</h1>
      <button className="lesson-learned-btn">
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
