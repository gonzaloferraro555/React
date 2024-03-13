import { useParams } from "react-router-dom";
import listaProductos from "../asyncMock";
import ItemDetalle from "../componentes/ItemDetalle";
import { useEffect,useState } from "react";







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
    
    const getProductById = (id)=>{
        return new Promise((resolve)=>{
            setTimeout(() => { 
            let produc = listaProductos.find(prod=> prod.id === id);
            resolve(produc)},500)
        })}
    
    


    const [producto,setProd] = useState(listaProductos[0]);
    

    useEffect (()=>{
        getProductById(id)
        .then ((produc)=>{
        setProd(produc)
    })
        
        },[id]
    );
    
    /*Tene en cuenta que siempre los url params, vienen como string, asique
    si a aprtir de ellos querés buscar info en algún lado, tenés que tenre
    en cuenta que el id de este json o de esa base de datos, sea del tipo string, y no
    un id number, porque sino nunca encontrás la coincidenca. */
    
    /*Destructuro el objeto, para usar directamente
    los nombres de las vi. */


    
    return (
            <ItemDetalle titulo={producto.titulo} image={producto.image} precio={producto.precio} descripcion={producto.descripcion} />

    )
}


export default ProductoDetalle;