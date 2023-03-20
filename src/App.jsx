import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoClientes from "./components/ListadoClientes"
import { useState } from "react"

function App() {

  const [cliente, setClientes] = useState([]);

  return (
    <div className="container mx-auto mt-10">
      <Header/>
        <div className="mt-5 md:flex">
          <Formulario
            cliente={cliente}
            setClientes={setClientes}
          />
          <ListadoClientes 
            cliente={cliente}
          />
        </div>
    </div>
  )
}

export default App
