import { useState, useEffect } from 'react'
import { Formulario } from "../Formulario/Formulario"
import Titulo from "../Titulo/Titulo"

const HomeContainer = ({ saludo }) => {
    //  [po1, pos2] <- useState()
    // if for while etc no estado
    const [ contador, setearContador ] = useState(0) 
    const [booleano, setBooleano] = useState(true)

    useEffect(()=>{
        console.log('addEventListener("evento", función)')
        // console.log('se ejecta siempre - 1')
        return () => {
            console.log('clean up - limpieza- removeEventListern')
        }
    })

    useEffect(()=>{
        console.log('llamada a las apis - 2')

    }, [])// una sola vez después de la primara ej de homeContainer
    
    useEffect(()=>{
        console.log('cambio de booleano - 3')

    }, [booleano, contador, saludo])// solo cuando cambio estado bool
    

    // console.log(contador)
    // console.log(booleano)
    

    // count = count + 1 - count += 1 - count ++
    const handleCount = () => {
        // count ++
        // console.log(count)
        setearContador(contador + 1)
    }

    const hanldeBool = ( ) => setBooleano(!booleano)
    

    // console.log('Antes Rendering de HomeContainer - 4')
  return (
    <center>
        {contador}
        <h2>{ saludo }</h2> 
        <button 
            className="btn btn-outline-primary" 
            onClick={handleCount} 
        > 
            + 
        </button>     
        <br></br>
        <button 
            className="btn btn-outline-primary" 
            onClick={hanldeBool} 
        > 
            Ejecutar Booleano
        </button>     
    </center>
  )
}

export default HomeContainer
