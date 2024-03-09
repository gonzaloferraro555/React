import {ItemIndividual} from "./ItemIndividual";



function ItemListContainer(l){
    return ( <div className='hero-body'>
                    {l.map((producto)=>{
                         return (
                                <div className='is-flex-direction-column'> 
                                    {<ItemIndividual  producto={producto}/>}
                                </div>
                                );})}; 
            </div>)

};






export default ItemListContainer;