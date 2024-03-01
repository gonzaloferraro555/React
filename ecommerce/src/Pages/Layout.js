
import { Outlet } from "react-router-dom";
import Navbar from '../componentes/Navbar';

function Layout(){
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <footer>
              Closed Sports
            </footer>
        </div>
    );
}


export default Layout;