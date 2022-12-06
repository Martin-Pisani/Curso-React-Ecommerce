import { useState, useEffect } from 'react'
import { gFetch } from '../../helpers/gFetch'
import { Formulario } from "../Formulario/Formulario"
import Titulo from "../Titulo/Titulo"

const ItemCount = () => {
    const [ contador, setearContador ] = useState(0) 
    const [booleano, setBooleano] = useState(true)
        // count = count + 1 - count += 1 - count ++
        const handleCount = () => {
            //count ++
            // console.log(count)
            setearContador(contador + 1)
        }
    
    const hanldeBool = ( ) => setBooleano(!booleano)
    
    return (
        <center>
        <button
            className="btn btn-outline-primary" 
            onClick={handleCount} 
        > 
            + 
        </button>  
        <label htmlFor="">{contador}</label>
      
        <button 
            className="btn btn-outline-primary" 
            onClick={handleCount} 
        > 
            - 
        </button> 
        <br />    
        <button 
            className="btn btn-outline-primary" 
            onClick={handleCount} 
        > 
            agregar al carrito 
        </button>     
        <br></br>
         {/* <button 
            className="btn btn-outline-primary" 
            onClick={hanldeBool} 
        > 
            Ejecutar Booleano
        </button>      */}
    </center>
    )
}

const ItemListContainer = ({ saludo }) => {
    const [ products, setProducts ] =   useState([])
    const [ loading, setLoading ] = useState(true) 
    
    useEffect(()=>{
        gFetch() // simulación de fetch para consultar una api
        .then( resp =>  setProducts(resp) )   // en esta linea cambia el estado 
        .catch( err => console.log( err ) )
        .finally(()=> setLoading(false))
        
    }, [])

    

    // console.log(contador)
    console.log('productos: ',products)   

    // console.log('Antes Rendering de HomeContainer - 4')
  return (
    <>
        <h2>{ saludo }</h2> 
        {/* [1,2,3] -> [<p key={} >1</p>, <p>2</p>, <p>3</p>] */}

        { loading ? 
            <h2>Cargando productos ...</h2> 
                :
            products.map( product =>    <div            
                                            style={{ marginLeft: 100}}
                                            className='col-md-3'
                                            key={product.id}
                                        >    
                                            
                                            <div className="card w-100 mt-5" >
                                                <div className="card-header">
                                                    {`${product.name} - ${product.categoria}`}
                                                </div>
                                                <div className="card-body">
                                                    <img src={product.foto} alt='' className='w-50' />
                                                    {product.price}                                                            
                                                </div>
                                        
                                                <div className="card-footer">                                                        
                                                    <button className="btn btn-outline-primary btn-block">
                                                        detalle del producto
                                                    </button>
                                                </div>
                                            </div>
                                                            
                                            
                                    </div>  
                ) }

        <ItemCount />
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
