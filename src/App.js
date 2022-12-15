import './App.css';
import './style.css';
import AppRouter from './pages/AppRouter';

import Amplify from 'aws-amplify';
import amplify_config from './amplify-config';

Amplify.configure(amplify_config);

function App() {
  return (
    <div>
      <div className="App">
        <AppRouter/>
      </div>
    </div>
  );
}

export default App;
