import './Project.css';

function Project(props) {
  return (
    <a href="https://www.w3schools.com/html/html_links.asp" className="project">
      <div className="project-card">
        <h1 className="title">{props.title}</h1>
        <h3 className="author">{props.author}</h3>
        <h2 className="description">{props.description}</h2>
        <p href="https://www.w3schools.com/html/html_links.asp" className="project-link">Abrir projeto</p>
      </div>
    </a>
  );
}

export default Project;