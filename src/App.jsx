import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import reactCarrito from './assets/carrito.png'
import reactLogo from './assets/logo.jpg'
//import reactCartWidget from './components/assets/carrito.png'
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
 
                <Route path='*' element={<Navigate to='/' />}/>
            </Routes>          
            
        </BrowserRouter>       
    )
}

export default App
