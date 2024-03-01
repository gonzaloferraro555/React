import "bulma/css/bulma.css";


function CartWIdget({img}){
    return  <div className="navbar-item" text-align="right">
                <button type="button"  className="button is-primary" alt="logo">
                    <img src={img} alt=""></img>
                </button>
                <div> 
                      0
                </div>
            </div>



}



export default CartWIdget;