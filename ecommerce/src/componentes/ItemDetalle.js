import { Link } from "react-router-dom";






function ItemDetalle ({titulo,image,precio,descripcion}) {

    return(
            <article className="galeria">
                <h2>Detalle de {titulo}</h2>
                <img src={image} alt=""/>
                <h3>Precio: ${precio}</h3>
                <p>{descripcion}</p>
                <div className="categoria">
                    <Link  to={`/`} >Volver</Link>      
                </div>
            </article>)


}


export default ItemDetalle;

