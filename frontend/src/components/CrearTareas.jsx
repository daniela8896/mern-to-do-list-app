import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CrearTareas = () => {
  const valorInicial = {
    nombre: "",
    descripcion: "",
    telefono: 1,
    correo: "",
  };

  let { id } = useParams();

  const [tarea, setTarea] = useState(valorInicial);
  const [subId, setSubId] = useState(id);

  const capturarDatos = (e) => {
    const { name, value } = e.target;
    setTarea({ ...tarea, [name]: value });
  };

  const guardarDatos = async (e) => {
    e.preventDefault();
    //console.log(tarea)

    //crear la logica para la peticion post

    const newTarea = {
      nombre: tarea.nombre,
      descripcion: tarea.descripcion,
      telefono: tarea.telefono,
      correo: tarea.correo,
    };

    await axios.post("http://localhost:4000/api/tareas", newTarea);

    setTarea({ ...valorInicial });
  };

  //funcion para actualizar la tarea

  const actualizarTarea = async(e) => {
    e.preventDefault();
    const nuevatarea = {
      nombre: tarea.nombre,
      descripcion: tarea.descripcion,
      telefono: tarea.telefono,
      correo: tarea.correo,
    }
    await axios.put("http://localhost:4000/api/tareas/" + subId, nuevatarea);
    setTarea({ ...valorInicial })
    setSubId('')
  }

  //logica para hacer una peticion al api
  const obtenerUno = async (valorId) => {
    const res = await axios.get("http://localhost:4000/api/tareas/" + valorId)
    setTarea({
      nombre: res.data.nombre,
      descripcion: res.data.descripcion,
      telefono: res.data.telefono,
      correo: res.data.correo,
    });
  };
  useEffect(() => {
    if (subId !== "") {
      obtenerUno(subId);
    }
  }, [subId]);

  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        <form className="" onSubmit={guardarDatos}>
          <h2 className="text-center mb-3">Crea tus tareas</h2>
          <div className="mb-3">
            <label>Titulo:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Escribe el titulo de la tarea"
              required
              name="nombre"
              value={tarea.nombre}
              onChange={capturarDatos}
            />
          </div>
          <div className="mb-3">
            <label>Descripción:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Escribe la descripción de la tarea"
              required
              name="descripcion"
              value={tarea.descripcion}
              onChange={capturarDatos}
            />
          </div>
          <div className="mb-3">
            <label>Telefono:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Escribe tu numero de telefono"
              required
              name="telefono"
              value={tarea.telefono}
              onChange={capturarDatos}
            />
          </div>
          <div className="mb-3">
            <label>Correo:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Escribe tu correo"
              required
              name="correo"
              value={tarea.correo}
              onChange={capturarDatos}
            />
          </div>

          <button className="btn btn-primary form-control">
            Guardar tarea
          </button>
        </form>
        <form onSubmit={actualizarTarea}>
          <button className="btn btn-danger form-control mt-2" onSubmit={actualizarTarea}>
            Actualizar tarea
          </button>
        </form>
      </div>
    </div>
  );
};

export default CrearTareas;
