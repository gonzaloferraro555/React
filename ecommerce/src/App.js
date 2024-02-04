
import NavBar from './componentes/Navbar';
import ItemListContainer from "./componentes/ItemListContainer";
import Categ1Img from "./img/categoria1.png";
import "bulma/css/bulma.css";

function App() {
  return (
    <div className='hero is block'>
      <div >
        <NavBar />
      </div>
      <div className='column,center'>
        <header className='title'>
          Categorías
        </header>
        <div className='column'>
          <ItemListContainer titulo="Calzados" img={Categ1Img}/>
          <ItemListContainer titulo="Remeras" img={Categ1Img}/>
          <ItemListContainer titulo="Pantalones" img={Categ1Img}/>
        </div>
      </div>
    </div>
  );
}

export default App;
