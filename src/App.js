import logo from './logo.svg';
import './styles/App.css';
import Componente1 from './componentes/Componente1.js';
import Componente2 from './componentes/Componente2';
import icono from './imagenes/icono.png'

function App() {
  return (
    <div className="App">
      <Componente1/>
      <button className='boton'>
        <img src={icono} /> 
      </button>
      <Componente2/>
    </div>
  );
}

export default App;
