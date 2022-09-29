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
        secondBtnLink="http://localhost:3000/"
      />
      <div className="App">
        <AppRouter/>
      </div>
    </div>
  );
}

export default App;
