import './ViewProject.css';
import Comment from '../components/Comment';
import LessonLearned from '../components/LessonLearned';

function ViewProject(props) {
  return (
    <div className="project-page">
      <div className="project-title-div">
        <h1 className="project-page-title">{props.title}</h1>
        <div>
          <button className="project-icon-button">
            <img src="/edit2-icon.png" alt="Editar" className="project-icon"/>
          </button>
          <button className="project-icon-button">
            <img src="/trash-icon.webp" alt="Apagar" className="project-icon"/>
          </button>
        </div>
      </div>
      <table>
        <tr>
          <th className="lesson-learned-titles">Autor:</th>
          <td className="lesson-learned-fields">{props.author}</td>
        </tr>
        <tr>
          <th className="lesson-learned-titles">Temas relacionados:</th>
          <td className="lesson-learned-fields">{props.theme}</td>
        </tr>
        <tr>
          <th className="lesson-learned-titles">Matérias relacionadas:</th>
          <td className="lesson-learned-fields">{props.subject}</td>
        </tr>
        <tr>
          <th className="lesson-learned-titles">Descrição:</th>
          <td className="lesson-learned-fields">{props.description}</td>
        </tr>
        <tr>
          <th className="lesson-learned-titles">Link do repositório:</th>
          <td className="lesson-learned-fields">{props.repositoryLink}</td>
        </tr>
        <tr>
          <th className="lesson-learned-titles">Etapas feitas para o desenvolvimento:</th>
          <td className="lesson-learned-fields">{props.stepsTaken}</td>
        </tr>
      </table>
      <h2 className="project-page-subtitle">Lições aprendidas</h2>
      <LessonLearned
        challenge="um desafio"
        solution="eu mesma"
        studyLinks="http://localhost:3000/"
      />
      <h2 className="project-page-subtitle">Comentários</h2>
      <Comment
        name="Fulano"
        text="O grande empenho dos egressos, como eu, dos atuais alunos, dos professores, dos servidores técnicoadministrativos ajudou na consolidação de nossa universidade."
      />
      <form className="create-comment">
        <input type="text" name="new-comment" placeholder="Digite seu comentário" className="comment-input"/>
        <button type="submit" className="send">
          <img src="/send-icon.png" alt="Enviar" className="send-icon"/>
        </button>
      </form>
    </div>
  );
}

export default ViewProject;
