import './Login.css';

function Login() {
  return (
    <div className="login-page">
      <h1 className="login-label">Login</h1>
      <input type="text" name="name" placeholder="e-mail" className="input"/>
      <input type="password" name="name" placeholder="senha" className="input"/>
      <button type="submit" className="blue-button">Login</button>
      <button type="submit" className="blue-button">Cadastre-se</button>
    </div>
  );
}

export default Login;
