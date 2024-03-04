import { Link, useParams} from "react-router-dom";
import listaProductos from "../data";
import "../Producto.css";
import { useState } from "react";



function Productos(){
    
    const {categoria} = useParams();


    
    const [lista,setLista] = useState(listaProductos);
    
    function handleClick () {
        setLista(listaProductos.filter(prod=>(prod.category==="Hombres")))
    }

    function handleClick3 () {
        setLista(listaProductos.filter(prod=>(prod.category==="Mujeres")))
    }

    function handleClick2 () {
        setLista(listaProductos);
    }



    function retorno (categoria) {
            if (categoria==="Hombres"){
                return(
                    <div className="categoria">
                        <Link onClick={handleClick3} to={`/Categoria/Mujeres`} >Mujeres</Link>
                    </div>
                     ) }
            if (categoria==="Mujeres") {
                return(
                    <div className="categoria">
                        <Link onClick={handleClick} to={`/Categoria/Hombres`} >Hombres</Link>   
                    </div>
                             ) }                    

            else 
                    return(

                    <div className="categoria">
                        <Link onClick={handleClick} to={`/Categoria/Hombres`} >Hombres</Link>
                        <Link onClick={handleClick3} to={`/Categoria/Mujeres`} >Mujeres</Link>
                    </div>
                    )
           
    }


                return (
                    <div>

                        <h1>Productos</h1>
                        <div className="galeria">
                                <div className="categoria">
                                    {retorno(categoria)}
                                </div>  
                                <div className="categoria">
                                    <Link onClick={handleClick2} to={`/`} >Home</Link>     
                                </div>
                                    {lista.map((producto)=>{
                                    return (
                                        <article key={producto.id}>
                                            <h5>{producto.titulo}</h5>
                                            <img src={producto.image} alt={producto.descripcion}/>  
                                            <Link to={`/Productos/${producto.id}`} >Más Info</Link>
                                        </article>
                                    );
                                    
                            })}

                        </div>
                       
                    </div>
                    
                )
            } 
       
        

    

export default Productos;
