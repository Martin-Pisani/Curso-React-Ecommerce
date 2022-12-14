import { ItemCount } from "../ItemCount/ItemCount"

const ItemDetail = ( product ) => {  // intercambiabilidad

     const onAdd = (cantidad) => console.log('Cantidad de productos seleccionados:', (cantidad))
  return (
    <div className="row">
        <div className="col m-5">
          <h2>{product.name}</h2>
          <img src={product.foto} className='m-50' alt="imágen del producto" />
          <h4>Categoria: {product.categoria}</h4>
          <h4>Precio: {product.price}</h4>

        </div>
    <div className="col">
      <ItemCount 
         stock={10} 
         inital={1}
         onAdd={onAdd}
         />
    </div>
</div>
    
  )
}

export default ItemDetail

