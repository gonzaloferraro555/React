import CartWIdget from "./CartWidget";
import img1 from '../img/cart1.png';
import "bulma/css/bulma.css";


function NavBar(){
       return   <nav className='navbar is box' role="navigation" aria-label="main navigation">
                    <div className="navbar-start, title">
                        Closed Sports   
                    </div>
                    <div className="navbar-end">
                        <CartWIdget img={img1}/>
                    </div>
                </nav>


}







export default NavBar;