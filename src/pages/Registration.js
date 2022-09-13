import './Access.css';

function Registration() {
  return (
    <div className="access-page">
      <h1 className="access-label">Cadastre-se</h1>
      <input type="text" name="name" placeholder="nome" className="input"/>
      <input type="text" name="email" placeholder="e-mail" className="input"/>
      <input type="password" name="password" placeholder="senha" className="input"/>
      <div className="checkbox-div">
        <input type="checkbox" name="isProfessor" className="input-checkbox"/>
        <h2 className="checkbox-text">Sou um professor</h2>
      </div>
      <button type="submit" className="blue-button">Cadastre-se</button>
    </div>
  );
}

export default Registration;
