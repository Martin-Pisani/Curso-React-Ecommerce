import { useState } from "react"

export const ItemCount = ( { stock = 5 }) => {
    const [ count, setCount ] = useState(0) 
    const [booleano, setBooleano] = useState(true)
     // count = count + 1 - count += 1 - count ++
     const handleCount = () => {
        if(count < stock) {
            console.log(count)
            setCount(count + 1)
        }
    }

    const hanldeBool = ( ) => setBooleano(!booleano)
    
    return (
        <center className="mt-5">
        <button 
            className="btn btn-outline-primary" 
            onClick={handleCount} 
        > 
            + 
        </button>     
        <label htmlFor="">{count}</label>
      
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
    
    </center>
    )
}
