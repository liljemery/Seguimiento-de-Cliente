import {useState,  useEffect} from "react";

function Formulario(){

    const [nombreCliente, setNombreCliente] = useState('');

    return(
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Formulario</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Agrega clientes y
                <span className="font-bold text-indigo-600"> Administralos</span>
            </p>
            <form className="bg-white shadow-md rounded-lg py-10 px-5">
                <div className="mb-5">
                    <label htmlFor="nombreCliente" className="block text-gray-700 font-bold">
                        Nombre Cliente</label>
                    <input
                        type="text"
                        placeholder="Nombre del cliente"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="nombreCliente"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="precioOrden" className="block text-gray-700 font-bold">
                    Precio de la orden</label>
                    <input
                        type="text"
                        placeholder="Precio del vestido"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="precioOrden"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="correoCliente" className="block text-gray-700 font-bold">
                    Correo electronico del cliente</label>
                    <input
                        type="email"
                        placeholder="Correo electronico del cliente"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="correoCliente"
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
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="descripcionOrden" className="block text-gray-700 font-bold">
                    Descripcion de la orden</label>
                    <textarea
                        placeholder="Descripcion del vestido"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="descripcionOrden"
                    />
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all rounded-md"
                    value="Agregar cliente"
                />
            </form>
        </div>
    )
}
export default Formulario;