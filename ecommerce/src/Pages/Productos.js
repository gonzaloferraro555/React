import { Link, useParams} from "react-router-dom";
import listaProductos from "../asyncMock";
import "../Producto.css";
import { useEffect, useState } from "react";
import ItemListContainer from "../componentes/ItemListContainer";
/*Cuando importas por default, no necesitás corchetes, 
  pero si termino importando algo por nombre del tipo
   export function NombreFunción; entonces si debo importarla con corchetes.
   Para el caso de los gerProduct, la exportación no es dafault, además son variables, 
   no funciones. La variable listaProductos es exportada por default, por eso va entre corchetes.*/


function Productos(){
    
    const {categoria} = useParams();


    
    const [lista,setLista] = useState(listaProductos);
    
    
    const getProducts =()=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve (listaProductos)},500)
            })
        }
    


        const getProductByCategory = (categoria)=>{
            return new Promise((resolve)=>{
                setTimeout(() => {
                const lista2 =listaProductos.filter(prod=> prod.category === categoria)
                resolve(lista2)},500)
            })
        }
        
        


    useEffect (()=>{
       if ((categoria==="Hombres")||(categoria==="Mujeres")){
            getProductByCategory(categoria)
            .then ((lista2)=>{
            setLista(lista2)
                            })}
        else {   
            getProducts ()
            .then (()=>{
            setLista(listaProductos)
        })}
    
    
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
                                <div>
                                    <ItemListContainer list={lista} />
                                </div>                           
                        </div>
                       
                    </div>
                    
                )
            } 
       
        

    

export default Productos;

