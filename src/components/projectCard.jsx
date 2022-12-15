import './projectCard.css';
import Card from 'react-bootstrap/Card';

function ProjectCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
      <Card.Text>
        {props.text}
      </Card.Text>
      <Card.Link href="#">Abrir projeto</Card.Link>
    </Card.Body>
  </Card>
  );
}

export default ProjectCard;