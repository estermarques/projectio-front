import Project from '../components/Project';
import './ListProjects.css';
import ProjectCard from '../components/projectCard.jsx'

function ListProjects(props) {
  const getAllProjects = () => {
    const obj = {
      userId: props.location.state.userId,
      author: props.location.state.author,
      title: props.location.state.title,
      subject: props.location.state.subject
    };

    fetch("https://v93r9d3h1j.execute-api.us-east-1.amazonaws.com/dev/project", {
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

  const getSingleProject = (projectId) => {
    fetch("https://v93r9d3h1j.execute-api.us-east-1.amazonaws.com/dev/project/" + projectId, {
      "method": "GET"
    })
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err);
    });

    // ! redirecionar para página que mostra um projeto
  }

  return (
    <div>
      <div className="title-div">
        <h1>{props.title}</h1>
      </div>
      
      <div className="projects-div">
        <ProjectCard title="Projeto cronômetro" subtitle="Ester Rodrigues" text="Um projeto simples, ideal para os desenvolvedores iniciantes."/>
        <ProjectCard title="Lista de Tarefas" subtitle="Ester Rodrigues" text="Desenvolvimento de uma lista de tarefas online usando JavaScript"/>
      </div>
    </div>
  );
}

export default ListProjects;
