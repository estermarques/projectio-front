import './App.css';
import './style.css';
import NavbarComponent from './components/Navbar';
import EditProject from './pages/EditProject';
import Amplify from 'aws-amplify';
import amplify_config from './amplify-config';

Amplify.configure(amplify_config);

function App() {
  return (
    <div>
      <NavbarComponent/>
      <div className="App">
        <EditProject/>
      </div>
    </div>
  );
}

export default App;
