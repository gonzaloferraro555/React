import { Link, useParams} from "react-router-dom";
import listaProductos from "../asyncMock";
import "../Producto.css";
import { useEffect, useState } from "react";
import { getProductByCategory, getProducts } from "../asyncMock";
import {ItemListContainer} from "../componentes/ItemListContainer";



function Productos(){
    
    const {categoria} = useParams();


    
    const [lista,setLista] = useState(listaProductos);
    
    


    
    function handleLista () {
        setLista(getProducts())
    }

    function handleListaFiltrada (categoria) {
        setLista(getProductByCategory(categoria));
    }



    useEffect (()=>{
       if ((categoria==="Hombres")||(categoria==="Mujeres")){
            handleListaFiltrada(categoria)
        }
        else {   
            handleLista()}
    
    
    },[categoria])


    function retorno (categoria) {
            if (categoria==="Hombres"){
                return(
                    <div className="categoria">
                        <Link  to={`/Categoria/Mujeres`} >Mujeres</Link>
                    </div>
                     ) }
            if (categoria==="Mujeres") {
                return(
                    <div className="categoria">
                        <Link  to={`/Categoria/Hombres`} >Hombres</Link>   
                    </div>
                             ) }                    

            else 
                    return(

                    <div className="categoria">
                        <Link  to={`/Categoria/Hombres`} >Hombres</Link>
                        <Link  to={`/Categoria/Mujeres`} >Mujeres</Link>
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
                                    <Link  to={`/`} >Home</Link>     
                                </div>
                                <ItemListContainer lista={lista} />

                        </div>
                       
                    </div>
                    
                )
            } 
       
        

    

export default Productos;
