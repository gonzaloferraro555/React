import ItemIndividual from "../componentes/ItemIndividual";



function ItemListContainer({list}) {
    return (<div className='hero-body'>
        {list.map((producto) => {
            return (
                <div className='is-flex-direction-column' key={producto.id}>
                    <ItemIndividual  id={producto.id} titulo={producto.titulo} 
                    image={producto.image} descripcion={producto.descripcion} />                  
                </div>
            );
        })}
    </div>)

};

/* When creating a list in the UI from an array with JSX,
                    you should add a key prop to each child and to any of its’ children.
                    React uses the key prop to create a relationship between the component
                    and the DOM element. The library uses this relationship to
                    determine whether or not the component should be re-rendered.
                    It is not recommended to use the index of the array as the key
                    prop if you know the array will not be static. If the key is an
                    index, reordering an item in the array changes it. Then React will
                    get confused and re-render the incorrect element. */




export default ItemListContainer;