import { useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import { Layout } from "./componentes/Layout";
import { NoEncontrado } from "./componentes/NoEncontrado";
import PaginaClases from "./paginas/paginaClases"; 
import PaginaClase from "./paginas/PaginaClase";   

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/clases" replace />}></Route>
        <Route path='/clases'>
          <Route index element={<PaginaClases />}></Route>
          <Route path=':id' element={<PaginaClase />}></Route>
        </Route>
        <Route path='*' element={<NoEncontrado />}></Route>
      </Route>
    </Routes>
  )
}

export default App;