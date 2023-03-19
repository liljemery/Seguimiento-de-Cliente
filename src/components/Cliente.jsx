function Cliente(){
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre Cliente: <br/>
            <span className="font-normal normal-case">
                Sandra
            </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Precio de la orden: <br/>
            <span className="font-normal normal-case">
                $ 99,99
            </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Correo Electronico del cliente: <br/>
            <span className="font-normal normal-case">
                sandra@2ssilhoette.com
            </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alquilado: <br/>
            <span className="font-normal normal-case">
                hoy
            </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha a devolver: <br/>
            <span className="font-normal normal-case">
                en 2 dias
            </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Descripcion de la orden: <br/>
            <span className="font-normal normal-case">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, nihil.
           </span>
        </p>
    </div>
  )
}
export default Cliente;