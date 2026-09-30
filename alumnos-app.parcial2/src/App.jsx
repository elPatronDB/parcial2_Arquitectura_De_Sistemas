import { useState } from 'react'
import './App.css'
import { Search } from './components/search/search-index'

  const todosLosAlumnos = [
    { id: 1, nombre: "Juan", curso: "Programación" },
    { id: 2, nombre: "Maria", curso: "Matemática" },
    { id: 3, nombre: "Pedro", curso: "Cálculo" }
  ];

  const busqueda = (e)=>{
    setAlumnos(todosLosAlumnos.filter(a => a.nombre.toLowerCase().includes(e.target.value.toLowerCase())))
  }

function App() {

  const [alumnos, setAlumnos] = useState (todosLosAlumnos);

  return (
    <>
      <div className="container">
      <h1>ALUMNOS "Parcial2 Arquitectura de Sistemas"</h1>
      <Search onChange={busqueda}/>
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
    </>
  )
}

export default App
