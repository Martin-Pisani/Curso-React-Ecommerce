import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
//import ItemList from "../../components/ItemList/ItemList"
import { ItemCount } from '../../components/ItemCount/ItemCount'
import { gFetch } from '../../helpers/gFetch'



const ItemListContainer = ({ saludo }) => {
    const [ products, setProducts ] =   useState([])
    const [ loading, setLoading ] = useState(true) 
    const { categoriaId } = useParams()
    
    useEffect(()=>{
        if (categoriaId) {
            gFetch() // simulación de fetch para consultar una api
            .then( resp =>  setProducts(resp.filter(product => product.categoria === categoriaId )) )   // en esta linea cambia el estado 
            .catch( err => console.log( err ) )
            .finally(()=> setLoading(false))             
        } else {
            gFetch() // simulación de fetch para consultar una api
            .then( resp =>  setProducts(resp) )   // en esta linea cambia el estado 
            .catch( err => console.log( err ) )
            .finally(()=> setLoading(false))            
        }   
    }, [categoriaId])

    console.log(categoriaId)    
  return (
    <>
        <h2>{ saludo }</h2> 
        {/* [1,2,3] -> [<p key={} >1</p>, <p>2</p>, <p>3</p>] */}

        { loading ? 
            <h2>Cargando productos ...</h2> 
                : 
                <div 
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }}
                >
                    {
                        products.map( product =>    <div            
                            style={{ marginLeft: 100}}
                            className='col-md-3'
                            key={product.id}
                        >   
                            <Link to={`/detail/${product.id}`} >
                                
                                <div className="card w-100 mt-5" >
                                    <div className="card-header">
                                        {`${product.name} - ${product.categoria}`}
                                    </div>
                                    <div className="card-body">
                                        <img src={product.foto} alt='' className='w-50' />
                                        {product.price}                                                            
                                    </div>
                            
                                    {/* <div className="card-footer">                                                        
                                        <button className="btn btn-outline-primary btn-block">
                                            detalle del producto
                                        </button>
                                    </div> */}
                                </div>

                            </Link>
                                            
                            
                    </div>  
) 
                    }
                </div>
            }
    </>
  )
}

export default ItemListContainer

// imágenes
// props : como si fuese un argumento - children 
// estados : 
    // ejecutan un nuevo render
    // no deben estar dentro de una estructura de contol

// ciclo de vida:
      // la primera llamada se llama mount
      // re render - evento - CAmbio de estos  - cambio de props
       // actulizar el componente
      
      // cuando hay evento se ejecuta de nuevo Home container



