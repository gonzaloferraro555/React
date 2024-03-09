import { Link } from "react-router-dom";



function ItemIndividual({id,titulo,image,descripcion}){
    return  <div className='hero-body'>
                <div className='is-flex-direction-column'>
                                        <article key={id}>
                                            <h5>{titulo}</h5>
                                            <img src={image} alt={descripcion}/>  
                                            <Link to={`/Productos/${id}`} >Más Info</Link>
                                        </article>            
                </div>
            </div>

}

export default  ItemIndividual;