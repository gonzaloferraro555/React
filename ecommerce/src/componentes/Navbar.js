import CartWIdget from "./CartWidget";
import img1 from '../img/cart1.png';
import "bulma/css/bulma.css";
import "../estilo.css";
import { Link} from "react-router-dom";
import "../Producto.css";


function Navbar(){
       return   <nav role="navigation" aria-label="main navigation">
                    <div className="navbar-start, title">
                        Closed Sports   
                    </div>
                    <div className="boton" >
                        <Link to="/">Home</Link>
                        <Link to="/Contacto" >Contacto</Link>
                    </div>
                    <div className="navbar-end">
                        <CartWIdget img={img1}/>
                    </div>
                </nav>


}







export default Navbar;