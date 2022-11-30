import { useState } from 'react'

import { Formulario } from './components/Formulario/Formulario'
import Titulo from './components/Titulo/Titulo'
import HomeContainer from './components/HomeContainer/HomeContainer'
import NavBar from './components/NavBar/NavBar'
import reactCarrito from './assets/carrito.png'
import reactLogo from './assets/logo.jpg'


//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Item () {
  return <p>Item</p>
}

// Titulo( { tituloApp:'titulo', subtitulo:'subtitulo' })

// porque es un compnente funciones que retornan elementos  <- jsx 
function App() { 
  // definido en app
  let saludo  = 'Soy Skaloneta, tu tienda online deportiva'
  let saludar = () => alert('soy func de app')

  return (
    <div>     
      <NavBar  />
      <HomeContainer 
        saludo={saludo} 
        
      />
      

    </div>
     
  )
}

export default App



  



