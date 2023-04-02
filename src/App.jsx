import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoClientes from "./components/ListadoClientes"
import { useState, useEffect } from "react"

function App() {

  const [clientes, setClientes] = useState([]);
  const [cliente, setCliente] = useState([]);

    useEffect(()=>{
      const obtenerLS = () => {
        const clientesLS = JSON.parse(localStorage.getItem('clientes')) ?? [];
        setClientes(clientesLS)
        console.log(clientesLS)
      }
  
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('clientes', JSON.stringify( clientes ))
  }
  ,[clientes])

  const eliminarCliente = id => {
    const respuesta = confirm(`Deseas eliminar este cliente?`)
    if(respuesta){
      const clientesActualizados = clientes.filter( cliente => cliente.id !== id)
      setClientes(clientesActualizados)
    }
  }

  return (
    <div className="container mx-auto mt-10">
      <Header/>
        <div className="mt-5 md:flex">
          <Formulario
            clientes={clientes}
            setClientes={setClientes}
            cliente={cliente}
          />
          <ListadoClientes 
            clientes={clientes}
            setCliente={setCliente}
            eliminarCliente={eliminarCliente}
          />
        </div>
    </div>
  )
}

export default App
