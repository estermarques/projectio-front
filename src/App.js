import './App.css';
import './style.css';
import NavbarComponent from './components/Navbar';
// colocar react-icons

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <button type="submit" className="white-button">Enviar</button>
      <input type="text" name="name" placeholder="Seu nome" className="input"/>
    </div>
  );
}

export default App;
