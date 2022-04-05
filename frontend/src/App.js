
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navegacion from './components/Navegacion';
import CrearTareas from './components/CrearTareas';
import ListaTareas from './components/ListaTareas';

function App() {
  return (
    <div className="">
      <Navegacion />
      <div className="container p-4">
        <Routes>
          <Route path="/" element={<ListaTareas />} />
          <Route path="/crearTarea" element={<CrearTareas />} />
          <Route path="/editar/:id" element={<CrearTareas />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
