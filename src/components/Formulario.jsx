import {useState,  useEffect} from "react";
import Error from "./Error";

function Formulario( {clientes, setClientes, cliente}){

    const [nombreCliente, setNombreCliente] = useState('');
    const [precioVestido, setPrecioVestido] = useState('');
    const [telefono, settelefono] = useState('');
    const [fechaAlquiler, setFechaAlquiler] = useState('');
    const [fechaDevuelto, setFechaDevuelto] = useState('');
    const [descVestido, setDescVestido] = useState('');

    const [error, setError] = useState(false);

    useEffect(()=>{
        if(Object.keys(cliente).length > 0){
            setNombreCliente(cliente.nombreCliente)
            setPrecioVestido(cliente.precioVestido)
            settelefono(cliente.telefono)
            setFechaAlquiler(cliente.fechaAlquiler)
            setFechaDevuelto(cliente.fechaDevuelto)
            setDescVestido(cliente.descVestido)
        }else{
            console.log('nada')
        }
    },[cliente])

    const generarID = () => {
        const random = Math.random().toString(36).slice(0,2)
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if([nombreCliente, precioVestido,telefono,fechaAlquiler,fechaDevuelto,descVestido].includes('')){
            setError(true)
        }else{
            //Validacion completa
            setError(false)
            //Objeto de cliente
            const objetoCliente = {
                nombreCliente,
                precioVestido,
                telefono,
                fechaAlquiler,
                fechaDevuelto,
                descVestido,
                id: generarID()
            }
            setClientes([...clientes,objetoCliente])
            setNombreCliente('')
            setPrecioVestido('')
            settelefono('')
            setFechaAlquiler('')
            setFechaDevuelto('')
            setDescVestido('')
        }
    }

    return(
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Formulario</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Agrega clientes y
                <span className="font-bold text-indigo-600"> Administralos</span>
            </p>
            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5"
            >
                {error && <Error />}
                <div className="mb-5">
                    <label htmlFor="nombreCliente" className="block text-gray-700 font-bold">
                        Nombre Cliente</label>
                    <input
                        type="text"
                        placeholder="Nombre del cliente"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="nombreCliente"
                        value={nombreCliente}
                        onChange={ (e) => setNombreCliente(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="precioOrden" className="block text-gray-700 font-bold">
                    Precio de la orden</label>
                    <input
                        type="number"
                        placeholder="Precio del vestido"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="precioOrden"
                        value={precioVestido}
                        onChange={ (e) => setPrecioVestido(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="telefonoCliente" className="block text-gray-700 font-bold">
                    Numero telefonico del cliente</label>
                    <input
                        type="tel"
                        placeholder="809-809-8009"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="telefonoCliente"
                        value={telefono}
                        onChange={ (e) => settelefono(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="fechaAlquilado" className="block text-gray-700 font-bold">
                    Fecha Alquilado</label>
                    <input
                        type="date"
                        placeholder="Fecha de alquiler del vestido"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="fechaAlquilado"
                        value={fechaAlquiler}
                        onChange={ (e) => setFechaAlquiler(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="fechaADevolver" className="block text-gray-700 font-bold">
                    Fecha a devolver</label>
                    <input
                        type="date"
                        placeholder="Fecha de alquiler del vestido"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="fechaADevolver"
                        value={fechaDevuelto}
                        onChange={ (e) => setFechaDevuelto(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="descripcionOrden" className="block text-gray-700 font-bold">
                    Descripcion de la orden</label>
                    <textarea
                        placeholder="Fecha de actividad / Fecha "
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="descripcionOrden"
                        value={descVestido}
                        onChange={ (e) => setDescVestido(e.target.value)}
                    />
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all rounded-md"
                    value={ cliente.id ? "Editar Paciente": "Agregar Paciente"}
                />
            </form>
        </div>
    )
}
export default Formulario;