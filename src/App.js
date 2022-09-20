import './App.css';
import './style.css';
import NavbarComponent from './components/Navbar';
import ListProjects from './pages/ListProjects';
import Amplify from 'aws-amplify';
import amplify_config from './amplify-config';

Amplify.configure(amplify_config);

function App() {
  return (
    <div>
      <NavbarComponent firstBtn="Adicionar projeto" secondBtn="Sair"/>
      <div className="App">
        <ListProjects title="Resultado da busca"/>
      </div>
    </div>
  );
}

export default App;
