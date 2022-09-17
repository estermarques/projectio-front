import './App.css';
import './style.css';
import NavbarComponent from './components/Navbar';
import ChooseLessonLearned from './pages/ChooseLessonLearned';
import Amplify from 'aws-amplify';
import amplify_config from './amplify-config';

Amplify.configure(amplify_config);

function App() {
  return (
    <div>
      <NavbarComponent/>
      <div className="App">
        <ChooseLessonLearned/>
      </div>
    </div>
  );
}

export default App;
