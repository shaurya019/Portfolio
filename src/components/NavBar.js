import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';
import { useState,useEffect } from 'react';




export const NavBar = () => {
  const [activeLink,setActvieLink] = useState('home');
  const [scrolled,setScrolled] = useState(false);

  useEffect(()=>{
const onScroll = () => {
  if(window.scrollY > 50){
setScrolled(true);
  }else{
    setScrolled(false);
  }
}
window.addEventListener("scroll",onScroll);
return () => window.removeEventListener("scroll",onScroll);
  },[])

  const onUpdateActiveLink = (value) => {
    setActvieLink(value);
  }
    return (
          <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#quaification" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experince')}>Experince</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            {/* <Nav.Link href="#link" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('link')}>Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
           <span className="navbar-text">
              <button className="vvd"><span>Let’s Connect</span></button>
            </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}