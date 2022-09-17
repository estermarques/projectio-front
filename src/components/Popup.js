import './Popup.css';

function Popup(props) {
  return (
    <div className="popup-box">
      <div className="popup">
        <p>Tem certeza que deseja excluir esse projeto?</p>
        <div className="popup-buttons">
          <button className="popup-btn">Excluir</button>
          <button className="popup-btn" onClick={props.handleClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;