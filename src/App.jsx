import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoClientes from "./components/ListadoClientes"
import { useState } from "react"

function App() {

  const [clientes, setClientes] = useState([]);
  const [Cliente, setCliente] = useState([]);

  return (
    <div className="container mx-auto mt-10">
      <Header/>
        <div className="mt-5 md:flex">
          <Formulario
            clientes={clientes}
            setClientes={setClientes}
          />
          <ListadoClientes 
            clientes={clientes}
            setCliente={setCliente}
          />
        </div>
    </div>
  )
}

export default App
