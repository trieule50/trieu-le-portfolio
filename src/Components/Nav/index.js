import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

export default function Navigation(){
    return(
        <Navbar className="nav" collapseOnSelect variant="light" expand="md">
        <Navbar.Brand as={Link} to="/"><h1 className='favicon'>
            T</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/">
            <h2 className='navTitle'>Home</h2>
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
            <h2 className='navTitle'>About</h2>
            </Nav.Link>
            <Nav.Link as={Link} to="/portfolio">
            <h2 className='navTitle'>Portfolio</h2>
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
            <h2 className='navTitle'>Contact Me</h2>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}