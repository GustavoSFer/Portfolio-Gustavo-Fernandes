import './App.css';
import Nav from './Components/Nav';
import Sobre from './Pages/Sobre';
import Carrosel from './Components/Carrosel';

function App() {
  return (
    <div className="p-5 border border-danger bg-dark text-white position">
      <Nav />
      <Carrosel />
      <Sobre />
    </div>
  );
}

export default App;
