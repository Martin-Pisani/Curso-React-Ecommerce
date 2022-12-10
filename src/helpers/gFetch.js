// Promesas -> 3 estados: pendiente, rechazado, aceptado
let productos = [
    {id: '1', name: 'PRODUCTO 1', categoria: 'Camiseta Adidas Argentina',stock: '100',price: '31500',  foto:'https://todosobrecamisetas.com/wp-content/uploads/camiseta-suplente-adidas-argentina-2022-1-1.jpg'},
    {id: '2', name: 'PRODUCTO 2', categoria: 'Camiseta Adidas España',stock: '100',price: '28500',  foto:'https://todosobrecamisetas.com/wp-content/uploads/camisetas-adidas-espana-2022-1.jpg'},
    {id: '3', name: 'PRODUCTO 3', categoria: 'Camiseta Nike Brasil',stock: '100',price: '28500',  foto:'https://todosobrecamisetas.com/wp-content/uploads/camisetas-nike-brasil-2022-3.jpg'},
    {id: '4', name: 'PRODUCTO 4', categoria: 'Camiseta Nike Francia',stock: '100',price: '28500',  foto:'https://todosobrecamisetas.com/wp-content/uploads/camisetas-nike-francia-2022-2.jpg'},
    {id: '5', name: 'PRODUCTO 5', categoria: 'Camiseta Nike Paises Bajos',stock: '100',price: '27500',  foto:'https://todosobrecamisetas.com/wp-content/uploads/camisetas-nike-paises-bajos-2022-2.jpg'},
    {id: '6', name: 'PRODUCTO 6', categoria: 'Camiseta Nike Croacia',stock: '100',price: '28500',  foto:'https://todosobrecamisetas.com/wp-content/uploads/camisetas-nike-croacia-2022-2.jpg'},
    

]

export const gFetch = (id) => {
    return new Promise( ( aceptado, rechazado)=> {
        // acciones 
        setTimeout(()=>{
            aceptado(id  ? productos.find(prod => prod.id === id) : productos) //{resultado: 6}
        }, 1000 )
        // rechazado( '404 todo mal' )
    } )
}
