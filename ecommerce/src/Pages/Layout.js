
import { Outlet } from "react-router-dom";
import Navbar from '../componentes/Navbar';
import "../estilo.css"


function Layout(){
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <footer>
              <div>Closed Sports</div>
              <li className="galeria">Calle Argentina n°1786</li>
              <li className="galeria">ClosedSports@latercera.com</li>
              <li className="galeria">Ig: Closed.Sports.ig</li>
            </footer>
        </div>
    );
}


export default Layout;