import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom' 

import { Formulario } from './components/Formulario/Formulario'
import Titulo from './components/Titulo/Titulo'
// import HomeContainer from './components/HomeContainer/HomeContainer'
import NavBar from './components/NavBar/NavBar'
import reactCarrito from './assets/carrito.png'
import reactLogo from './assets/logo.jpg'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './components/CartContainer/CartContainer'

import 'bootstrap/dist/css/bootstrap.min.css';


// porque es un compnente funciones que retornan elementos  <- jsx 
function App() { 
  // definido en app
    let saludo  = 'Bienvenidos a Skaloneta Shop'
    let saludar = () => alert('soy func de app') //estados
    // console.log('Rering App')
    return (
        <BrowserRouter>  
            <NavBar  
                // homeContainer={ HomeContainer } 
            />   
            <Routes >
                <Route path='/' element={ <ItemListContainer saludo={saludo} /> } />
                <Route path='/categoria/:categoriaId' element={ <ItemListContainer saludo={saludo} /> } />
                
                <Route path='/detail/:productoId' element={ <ItemDetailContainer /> } />
                <Route path='/cart' element={<CartContainer />} />                
                {/* <Route path='/notpage' element={<Componente404 />} />                 */}
                
                <Route path='*' element={<Navigate to='/' />}/>
            </Routes>          
            
        </BrowserRouter>       
    )
}

export default App
