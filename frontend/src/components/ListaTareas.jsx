import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

const ListaTareas = () => {
const [lista, setLista] = useState([])

useEffect(() =>{
const getTareas = async()=>{
  const res = await axios.get('http://localhost:4000/api/tareas')
  setLista(res.data)
  }
  getTareas()
}, [lista])
  
  const eliminarTarea = async(id) => {
    await axios.delete('http://localhost:4000/api/tareas/' + id);
  }


  return (
    <div className="container">
      <div className="row">
        {lista.map((list) => (
          <div className="col-md-4 p-2" key={list._id}>
            <div className="card">
              <div className="card-header">
                <h5>Tarea: {list.nombre}</h5>
              </div>
              <div className="card-body">
                <p>{list.descripcion}</p>
                <p>{list.telefono}</p>
                <p>{list.correo}</p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-danger"
                  onClick={() => eliminarTarea(list._id)}
                >Eliminar</button>
                <Link className="btn btn-primary m-1" to={/editar/ + list._id}>
                  Editar
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaTareas