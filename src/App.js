import './App.css';
import Nav from './Components/Nav';
import Sobre from './Pages/Sobre';
import Carrosel from './Components/Carrosel';
import Projetos from './Pages/Projetos';
import Habilidades from './Pages/Habilidades';

function App() {
  return (
    <div className="p-5 border border-danger bg-dark text-white position">
      <Nav />
      <Carrosel />
      <Sobre />
      <Projetos />
      <Habilidades />
    </div>
  );
}

export default App;
