import './App.css';
import Nav from './Components/Nav';
import Sobre from './Pages/Sobre';
import Carrosel from './Components/Carrosel';
import Projetos from './Pages/Projetos';
import Habilidades from './Pages/Habilidades';
import Contato from './Pages/Contato';

function App() {
  return (
    <div className="p-5 bg-dark text-white position border border-success">
      <Nav />
      <Carrosel />
      <Sobre />
      <Projetos />
      <Habilidades />
      <Contato />
    </div>
  );
}

export default App;
