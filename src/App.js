import './App.css';
import './style.css';
import NavbarComponent from './components/Navbar';
import AppRouter from './pages/AppRouter';

import Amplify from 'aws-amplify';
import amplify_config from './amplify-config';

Amplify.configure(amplify_config);

function App() {
  return (
    <div>
      <NavbarComponent
        firstBtn="Adicionar projeto"
        firstBtnLink="http://localhost:3000/create-project"
        secondBtn="Sair"
        secondBtnLink="http://localhost:3000/create-project"
      />
      <div className="App">
        <AppRouter/>
      </div>
      <div> Ícones feitos por <a href="https://www.freepik.com" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/br/" title="Flaticon">www.flaticon.com'</a></div>
    </div>
  );
}

export default App;
