import './App.css';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import Carrosel from './Components/Carrosel';

function App() {
  return (
    <div className="p-5 border border-danger bg-dark text-white position">
      <Nav />
      <Carrosel />
      <Home />
    </div>
  );
}

export default App;
