import './App.css';
import './style.css';
import NavbarComponent from './components/Navbar';
import CreateProject from './pages/CreateProject';
import Amplify from 'aws-amplify';
import amplify_config from './amplify-config';

Amplify.configure(amplify_config);

function App() {
  return (
    <div>
      <NavbarComponent/>
      <div className="App">
        <CreateProject/>
      </div>
    </div>
  );
}

export default App;
