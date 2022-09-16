import './App.css';
import './style.css';
import NavbarComponent from './components/Navbar';
import ViewProject from './pages/ViewProject';
import Amplify from 'aws-amplify';
import amplify_config from './amplify-config';

Amplify.configure(amplify_config);

function App() {
  return (
    <div>
      <NavbarComponent/>
      <div className="App">
        <ViewProject
          title="Country roads, take me home To the place I belong"
          author="eu mesma"
          theme="teste"
          subject="teste"
          description= "O grande empenho dos egressos, como eu, dos atuais alunos, dos professores, dos servidores técnicoadministrativos ajudou na consolidação de nossa universidade."
          repositoryLink="https://github.com/estermarques/tcc-back-end"
          stepsTaken="teste"
        />
      </div>
    </div>
  );
}

export default App;
