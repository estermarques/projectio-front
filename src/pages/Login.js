import './Access.css';

function Login() {
  return (
    <div className="access-page">
      <h1 className="access-label">Login</h1>
      <input type="text" name="email" placeholder="e-mail" className="input"/>
      <input type="password" name="password" placeholder="senha" className="input"/>
      <button type="submit" className="blue-button">Login</button>
      <button type="submit" className="blue-button">Cadastre-se</button>
    </div>
  );
}

export default Login;
