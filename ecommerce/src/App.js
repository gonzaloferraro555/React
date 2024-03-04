



import "bulma/css/bulma.css";
import {BrowserRouter, Route,Routes} from "react-router-dom";



import ProductoDetalle from "./Pages/ProductoDetalle"
import Productos from "./Pages/Productos"
import Layout from "./Pages/Layout";
import Contacto from "./Pages/Contacto";






function App() {
  return (
      <BrowserRouter>    
          <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index  element={<Productos/>}/>
                <Route path="Categoria/:categoria" element={<Productos/>}/>            
                <Route path="Productos/:id" element={<ProductoDetalle/>}/>
                <Route path="Contacto" element={<Contacto/>}/>
            </Route>
            <Route path="*" element={<h1>Error 404, página no encontrada</h1>}/>
          </Routes>         
      </BrowserRouter> 
  );
}

export default App;
