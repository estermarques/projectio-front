import './Comment.css';

function Comment(props) {
  return (
    <div className="comment">
      <h1 className="username">{props.name}</h1>
      <h2 className="text">{props.text}</h2>
    </div>
  );
}

export default Comment;