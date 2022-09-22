import './App.css';
import './style.css';
import NavbarComponent from './components/Navbar';
import Registration from './pages/Registration';
import Amplify from 'aws-amplify';
import amplify_config from './amplify-config';

Amplify.configure(amplify_config);

function App() {
  return (
    <div>
      <NavbarComponent firstBtn="Adicionar projeto" secondBtn="Sair"/>
      <div className="App">
        <Registration/>
      </div>
    </div>
  );
}

export default App;
