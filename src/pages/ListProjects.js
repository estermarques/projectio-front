import Project from '../components/Project';
import './ListProjects.css';

function ListProjects(props) {
  return (
    <div>
      <div className="title-div">
        <h1>{props.title}</h1>
      </div>
      <div className="projects-div">
        <div className="prj">
          <Project
            title="um titulo bem grande"
            author="eu mesma"
            description="Suspendisse ac condimentum velit. Quisque ornare vitae lectus vel varius. Pellentesque tincidunt ultrices ullamcorper. Aenean quis pulvinar risus, at varius magna."
          />
        </div>
        <div className="prj">
          <Project
            title="um outro titulo grande"
            author="novamente eu"
            description="Nunc urna arcu, molestie ac iaculis quis, laoreet sed lectus. Aenean congue quam sed leo aliquet, ac scelerisque augue efficitur. Suspendisse in facilisis nulla."
          />
        </div>
        <div className="prj">
          <Project
            title="terceiro titulo"
            author="eu"
            description="Ut porta felis vel purus efficitur porttitor. Integer posuere euismod tellus sit amet convallis. Nam a ligula id diam commodo pulvinar nec sit amet sapien."
          />
        </div>
      </div>
    </div>
  );
}

export default ListProjects;
