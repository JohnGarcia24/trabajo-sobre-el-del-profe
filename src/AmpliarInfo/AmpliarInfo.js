import './Ampliarinfo.css'
import { useLocation } from "react-router-dom"
export function AmpliarInfo(){

    let datosrecibidos=useLocation()


    let producto=datosrecibidos.state.productoSeleccionado
    console.log(producto)

    return(
        <>
            <div className="container">

                <div className="row my-5">
                    <div className="col-12 col-md-5">
                        <img src={producto.foto} alt="foto" className="img-fluid w-100"/>
                    </div>
                    <div className="col-12 col-md-4 border p-3">
                        <h3 className="fw-bold">{producto.nombre}</h3>
                        <h1 className="mt-3 display-5">${producto.precio}USD<span className="descuento">  20% off</span></h1>
                        <br/>
                        <span class="badge text-bg-primary">Descuento del dia</span>
                        <p>Hasta 48 coutas</p>
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotyjegc.appspot.com/o/visa.png?alt=media&token=be0ccc05-477c-4da8-b6fa-fbb733b2cb5c" alt="" className='img-fluid'/>
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotyjegc.appspot.com/o/american-express.png?alt=media&token=d126379b-9e28-4345-8c31-6c4027deaa15" alt="" className='img-fluid ms-3'/>

                        <br/>

                        <i className="bi bi-truck mt-5 fs-1 text-success"></i>
                        <p className='text-success'>Envio gratis a nivel nacional</p>
                        <p>Conoce los tiempos de envio.</p>

                        <i class="bi bi-arrow-counterclockwise mt-5 fs-1 text-success"></i>
                        <p className='text-success'>Devolucion gratis</p>
                        <p>30 dias para reembolso.</p>

                        <br/>

                        <h2 className="fw-bold">DESCRIPCION</h2>
                        <p>{producto.descripcion}</p>
                       

                    </div>
                </div>

            </div>
        </>
    )

}