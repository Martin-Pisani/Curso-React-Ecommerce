import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/logo.jpg'
import carrito from '../../assets/carrito.png'


import './NavBar.css' 

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
          <img className= 'w-25'src={logo}/>
          <Navbar.Brand href="#home">Ecommerce Skaloneta Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#camisetas">Camisetas</Nav.Link>
          <Nav.Link href="#shorts">Shorts</Nav.Link>
          <Nav.Link href="#calzado">Calzado</Nav.Link>
          <NavDropdown title="Accesorios" id="collasible-nav-accesorios">
            <NavDropdown.Item href="#action/3.1">Pelotas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Guantes de Arquero</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Canilleras</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Medias</NavDropdown.Item>
            <NavDropdown.Divider /> <NavDropdown.Item href="#action/3.4">Alimentos Saludables</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link eventKey={2} href="#memes">
          1
          <img className= 'w-25'src={carrito} alt='imagen'/>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
     
  )
}

export default NavBar