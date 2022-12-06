import { useState } from 'react'

import { Formulario } from './components/Formulario/Formulario'
import Titulo from './components/Titulo/Titulo'
// import HomeContainer from './components/HomeContainer/HomeContainer'
import NavBar from './components/NavBar/NavBar'
import reactCarrito from './assets/carrito.png'
import reactLogo from './assets/logo.jpg'



// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function Item () {
  return <p>Item</p>
}
// Titulo( { tituloApp:'titulo', subtitulo:'subtitulo' })

// porque es un compnente funciones que retornan elementos  <- jsx 
//function App(props) { 
  function App() { 
  // definido en app
    let saludo  = '¡ La Skaloneta se renueva, tu tienda online deportiva!'
    let saludar = () => alert('soy func de app') //estados
        // console.log('Rering App')
              
        return (
          <div>             
              <NavBar  
                  // homeContainer={ HomeContainer } 
              />   
              <ItemListContainer  
                //ItemListContainer
                  saludo={saludo} 
                  
              />
              {/* <ItemDetailContainer /> */}
          </div>       
      )
  }
  
  export default App
  