// Promesas -> 3 estados: pendiente, rechazado, aceptado
let productos = [
    {id: '1', name: 'PRODUCTO 1', categoria: 'Camiseta Adidas Argentina',stock: '100',price: '31500',  foto:'https://todosobrecamisetas.com/wp-content/uploads/camiseta-suplente-adidas-argentina-2022-1-1.jpg'},
    {id: '2', name: 'PRODUCTO 2', categoria: 'Camiseta Adidas España',stock: '100',price: '28500',  foto:'https://todosobrecamisetas.com/wp-content/uploads/camisetas-adidas-espana-2022-1.jpg'},
    {id: '3', name: 'PRODUCTO 3', categoria: 'Camiseta Nike Brasil',stock: '100',price: '28500',  foto:'https://todosobrecamisetas.com/wp-content/uploads/camisetas-nike-brasil-2022-3.jpg'},
    {id: '4', name: 'PRODUCTO 4', categoria: 'Camiseta Nike Francia',stock: '100',price: '28500',  foto:'https://todosobrecamisetas.com/wp-content/uploads/camisetas-nike-francia-2022-2.jpg'},
    {id: '5', name: 'PRODUCTO 5', categoria: 'Camiseta Nike Paises Bajos',stock: '100',price: '27500',  foto:'https://todosobrecamisetas.com/wp-content/uploads/camisetas-nike-paises-bajos-2022-2.jpg'},
    {id: '6', name: 'PRODUCTO 6', categoria: 'Camiseta Nike Croacia',stock: '100',price: '28500',  foto:'https://todosobrecamisetas.com/wp-content/uploads/camisetas-nike-croacia-2022-2.jpg'},
    {id: '7', name: 'PRODUCTO 7', categoria: 'Shorts Adidas Argentina',stock: '50',price: '13500',  foto:'https://2.bp.blogspot.com/-j88GD3L0PCY/XI0Eg1OMqWI/AAAAAAAB1cU/q0c_3MPq2N4IlyYVU_3uuXtXkVYkr19uACLcBGAs/s1600/argentina-2019-copa-america-kit-5.jpg'},
    {id: '8', name: 'PRODUCTO 8', categoria: 'Conjuntos Deportivos Adidas Argentina',stock: '50',price: '30500', foto:'https://i.pinimg.com/originals/c2/92/d2/c292d2d427b4b801ece625d18946521e.jpg'},
    {id: '9', name: 'PRODUCTO 9', categoria: 'Botines Puma Argentina',stock: '50',price:'30500', foto: 'https://i.pinimg.com/originals/c2/92/d2/c292d2d427b4b801ece625d18946521e.jpg'},

]

export const gFetch = (id) => {
    return new Promise( ( resolve, reject)=> {
        // acciones 
        setTimeout(()=>{
            resolve(id  ? productos.find(prod => prod.id === id) : productos) //{resultado: 6}
        }, 1000 )
        // rechazado( '404 todo mal' )
    } )
}
