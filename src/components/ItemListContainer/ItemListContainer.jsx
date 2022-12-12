import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
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
    
            { loading ? 
                <h2>Cargando productos ...</h2> 
                    :
                    <ItemList products={products} />
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
    

          