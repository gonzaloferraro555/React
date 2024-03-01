

const listaProductos = 
    [
        {
        "id": "1",
        "titulo": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "precio": 109.95,
        "descripcion": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "Hombres",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
        {
        "id": "2",
        "titulo": "Mens Casual Premium Slim Fit T-Shirts ",
        "precio": 22.3,
        "descripcion": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "Hombres",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        },
        {
        "id": "3",
        "titulo": "Mens Cotton Jacket",
        "precio": 55.99,
        "descripcion": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "Hombres",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        },
        {
        "id": "4",
        "titulo": "Mens Casual Slim Fit",
        "precio": 15.99,
        "descripcion": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category": "Hombres",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        },
        {
        "id": "5",
        "titulo": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "precio": 695,
        "descripcion": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "Mujeres",
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        },
        {
        "id": "6",
        "titulo": "Solid Gold Petite Micropave ",
        "precio": 168,
        "descripcion": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "Mujeres",
        "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        },
        {
        "id": "7",
        "titulo": "White Gold Plated Princess",
        "precio": 9.99,
        "descripcion": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        "category": "Mujeres",
        "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        },
        {
        "id": "8",
        "titulo": "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "precio": 10.99,
        "descripcion": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        "category": "Mujeres",
        "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        }
];


export default listaProductos;

/*Función que se carga cuando no hay parámetro en la url,
es decir no aplique ningún parámetro de filtro */



export const getProducts =()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve (listaProductos)},500)
        })
    }


export const getProductById = (productId)=>{
    return new Promise((resolve)=>{
        resolve(listaProductos.find(prod=> prod.id === productId),500)
    })
}


export const getProductByCategory = (productByCategory)=>{
    return new Promise((resolve)=>{
        resolve(listaProductos.filter(prod=> prod.category === productByCategory),500)
    })
}