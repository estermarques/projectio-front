import './Popup.css';

function Popup(props) {
  const deleteProject = () => {
    const obj = { projectId: props.projectId };

    fetch("https://v93r9d3h1j.execute-api.us-east-1.amazonaws.com/dev/project", {
      "method": "DELETE",
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
    <div className="popup-box">
      <div className="popup">
        <p>Tem certeza que deseja excluir esse projeto?</p>
        <div className="popup-buttons">
          <button className="popup-btn" onClick={deleteProject}>Excluir</button>
          <button className="popup-btn" onClick={props.handleClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;