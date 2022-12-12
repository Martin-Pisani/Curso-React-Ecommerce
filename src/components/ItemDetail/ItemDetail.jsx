import { ItemCount } from "../ItemCount/ItemCount"

const ItemDetail = () => {  // intercambiabilidad
  return (
    <div className="row">
        <div className="col">
          Detalle
        </div>
    <div className="col">
      <ItemCount />
    </div>
</div>
    
  )
}

export default ItemDetail

