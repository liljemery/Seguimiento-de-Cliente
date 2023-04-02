import Cliente from "./Cliente";

function ListadoClientes({clientes, setCliente, eliminarCliente}){

    return(
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
            <h2 className="font-black text-3xl text-center">Listado Clientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Administra tus 
                <span className="text-indigo-600 font-bold"> clientes y citas</span>
            </p>
            { clientes.map( clientes =>(
                <Cliente
                    key={clientes.id}
                    clientes={clientes}
                    setCliente={setCliente}
                    eliminarCliente={eliminarCliente}
                />
            ))}
        </div>
    )
}

export default ListadoClientes;