import { Link, useParams} from "react-router-dom";
import listaProductos from "../data";
import "../Producto.css";



function Productos(){
    
    const {categoria} = useParams()
    
    let listaProductosFil=listaProductos;


    if ((categoria ==="Hombres")||(categoria==="Mujeres")){
        listaProductosFil = listaProductos.filter(prod=>(prod.category===categoria))
    }
                return (
                    <div>

                        <h1>Productos</h1>
                        <div className="galeria">
                                <div className="categoria">
                                    <Link to={`/Categoria/Hombres`} >Hombres</Link>
                                    <Link to={`/Categoria/Mujeres`} >Mujeres</Link>
                                </div>  
                                {listaProductosFil.map((producto)=>{
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