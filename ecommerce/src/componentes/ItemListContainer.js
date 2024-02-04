


function ItemListContainer({titulo,img,greeting}){
    return  <div className='hero-body'>
                <div className='is-flex-direction-column'>
                    <h3>{titulo}</h3>
                    <button type= "button">
                        <img src={img} height="150" width="200"></img> 
                    </button>   
                </div>
            </div>

}






export default ItemListContainer;