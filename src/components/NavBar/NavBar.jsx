import { Link, NavLink } from 'react-router-dom'

//import carrito from '../../assets/carrito.jpg'
import logo from '../../assets/logo.jpg'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = (   ) => {
  // console.log('Rendering Navbar')
  return (
      <>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Container>
                  <img className= 'w-20'src={logo}/>
                  <NavLink className={ ( {isActive} )=> isActive ? 'btn btn-success' : 'btn btn-outline-success'} to='/node_modules'>Ecommerce-Skaloneta</NavLink>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                      <NavLink 
                          className={ ( {isActive} )=> isActive ? 'btn btn-success' : 'btn btn-outline-success'} 
                          to="/categoria/camiseta"
                      >
                              Camiseta
                      </NavLink>
                      <NavLink 
                          className={ ( {isActive} )=> isActive ? 'btn btn-success' : 'btn btn-outline-success'} 
                          to="/categoria/shorts"
                      >
                          Shorts
                      </NavLink>
                      <NavLink 
                          className={ ( {isActive} )=> isActive ? 'btn btn-success' : 'btn btn-outline-success'} 
                          to="/categoria/calzado"
                      >
                          Calzado
                      </NavLink>
                      <NavLink 
                          className={ ( {isActive} )=> isActive ? 'btn btn-success' : 'btn btn-outline-success'} 
                          to="/categoria/conjuntos deportivos"
                      >
                          Conjuntos Deportivos 
                      </NavLink>
                      
                  </Nav>
                  <Nav>
                      {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
                      <Link to='/cart' >
                          {/* <img src={carrito} alt='imagen'/> */}
                          {/* <img className='w-25' src={''} alt='imagen'/> */}
                          1
                          <CartWidget />
                      </ Link>
                  </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
          {/* { homeContainer({saludo: 'Soy saludo de navbar'}) } */}
      </>
  )
}

export default NavBar







