import { useParams } from "react-router-dom";
import listaProductos from "../data";
import "../Producto.css";





/*Importar en App */
function ProductoDetalle (){
    
    const {id} = useParams(); /*La variable que recibe al objeto debe
    llamarse igual que el campo que defini en la url de app.js, porque lo 
    que está pasando es que useParams me devuelve un objeto, con una sola 
    característica o vi, con el nombre id, porque es lo que yo defini en app.js 
    luego de los ":". Si el objeto que viene tiene una vi llamada "id" debo
    desestructurarla de useParams en una variable que coincida con su nombre,
    por eso es {id}. useParams siempre DEVUELVE OBJETOS. Si hubiese tenido tres
    vi hubiese podido desestructurarlas a las 3.*/
    
    
    const {precio,descripcion,image,titulo} = listaProductos.find (producto=>producto.id===id);
    /*Tene en cuenta que siempre los url params, vienen como string, asique
    si a aprtir de ellos querés buscar info en algún lado, tenés que tenre
    en cuenta que el id de este json o de esa base de datos, sea del tipo string, y no
    un id number, porque sino nunca encontrás la coincidenca. */
    
    /*Destructuro el objeto, para usar directamente
    los nombres de las vi. */

  
    
    return (
        
        <article className="galeria">
            <h2>Detalle de {titulo}</h2>
            <img src={image} alt=""/>
            <h3>Precio: ${precio}</h3>
            <p>{descripcion}</p>
        </article>
    )
}


export default ProductoDetalle;