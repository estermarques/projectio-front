import './App.css';
import './style.css';
import NavbarComponent from './components/Navbar';
import Project from './components/Project';
import Registration from './pages/Registration';
// colocar react-icons

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <button type="submit" className="white-button">Enviar</button>
      <input type="text" name="name" placeholder="Seu nome" className="input"/>
      <Project
        title="um titulo bem grande"
        author="eu mesma"
        description="Suspendisse ac condimentum velit. Quisque ornare vitae lectus vel varius. Pellentesque tincidunt ultrices ullamcorper. Aenean quis pulvinar risus, at varius magna."
      />
      <Registration/>
    </div>
  );
}

export default App;
