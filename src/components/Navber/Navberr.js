import React from 'react'
import { NavLink } from 'react-router-dom';
import {Container,Nav,Navbar} from 'react-bootstrap';
import './Navberr.css'
import Logo from '../Logo/Logo';


const Navberr = () => {
     const hi = () => {
        const nav =document.querySelector(".btnnn")

        nav.classList.add("remove")
        console.log("click");
        
    };



  
    
    return (
        <div>
                <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Logo/>
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="" />
            <Navbar.Collapse id="">
            <Nav className="me-auto">
                <NavLink to="/" className={({isActive})=> isActive ? "activeStyle" : "inactive"   } > Home</NavLink>
                <NavLink to="/about" className={({isActive})=> isActive ? "activeStyle" : "inactive"  } > About</NavLink>
                <NavLink to="/contact" className={({isActive})=> isActive ? "activeStyle" : "inactive"  } > Contact</NavLink>
                <NavLink to="/blog" className={({isActive})=> isActive ? "activeStyle" : "inactive"  } > blog</NavLink>
               
               
                
                
            </Nav>
            <Nav>
            <NavLink  onClick={hi} to="/login" className="btnnn btn-sm btn btn-primary mx-1 rounded-pill px-3 " > Login</NavLink>
            <NavLink to="/subscribe" className=" btn-sm btn  btn-danger rounded-pill px-3 " > Subscribe</NavLink>
                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
    )
}

export default Navberr
