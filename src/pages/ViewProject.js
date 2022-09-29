import React, { useState } from 'react';
import './ViewProject.css';
import Comment from '../components/Comment';
import LessonLearned from '../components/LessonLearned';
import Popup from '../components/Popup';

function ViewProject(props) {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const comment = () => {
    const text = (document.getElementById('text').value);

    const obj = {
      text,
      projectId: props.projectId,
      userId: props.userId,
    };
  
    fetch("https://v93r9d3h1j.execute-api.us-east-1.amazonaws.com/dev/comment", {
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
    <div className="project-page">
      <div className="project-title-div">
        <h1 className="project-page-title">{props.title}</h1>
        <div>
          <button className="project-icon-button">
            <img src="/edit2-icon.png" alt="Editar projeto" className="project-icon"/>
          </button>
          <button className="project-icon-button">
            <img src="/trash-icon.webp" alt="Apagar projeto" className="project-icon" onClick={togglePopup}/>
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
        <input type="text" name="new-comment" placeholder="Digite seu comentário" className="comment-input" id="text"/>
        <button type="submit" className="send">
          <img src="/send-icon.png" alt="Enviar" className="send-icon" onClick={comment}/>
        </button>
      </form>

      {isOpen && <Popup
        handleClose={togglePopup}
      />}
    </div>
  );
}

export default ViewProject;
