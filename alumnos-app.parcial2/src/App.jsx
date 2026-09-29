import { useState } from 'react'
import './App.css'

  const todosLosAlumnos = [
    { id: 1, nombre: "Juan", curso: "Programación" },
    { id: 2, nombre: "Maria", curso: "Matemática" },
    { id: 3, nombre: "Pedro", curso: "Cálculo" }
  ];


function App() {

  const [alumnos, setAlumnos] = useState (todosLosAlumnos);

  return (
    <>
      <div className="container">
      <h1>ALUMNOS "Parcial2 Arquitectura de Sistemas"</h1>
      <table>
        <thead>
          <tr><th>ID</th><th>Nombre</th><th>Curso</th></tr>
        </thead>
        <tbody>
          {alumnos.map(a => (
            <tr key={a.id}><td>{a.id}</td><td>{a.nombre}</td><td>{a.curso}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
    <div>
      <h3>Agregar Alumno</h3>
        <form>
          <label>
            ID:
            <input type="text" name="id" />
          </label>
          <label>
            Nombre:
            <input type="text" name="nombre" />
          </label>
          <label>
            Curso:
            <input type="text" name="curso" />
          </label>
          <input type="submit" value="Agregar" />
        </form>
    </div>

    </>
  )
}

export default App
