import React from 'react'
import { useDispatch , useSelector} from 'react-redux'

import {Container, Nav , Navbar} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import Google  from './Google';
// import GoogleAuth from './GoogleAuth';
// import Gauth from './Gauth'


const Header = () => {

  const auth = useSelector((state) => state.auth)
  const {isSignedIn , user} = auth

    return (
        <header className='header'>


<Navbar  bg="dark" variant= 'dark' expand="lg" collapseOnSelect >
  <Container> 
  

  <Navbar.Brand href="#home">Recpie-House</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav ">
      <Nav id="login-btn" > 

<Nav.Link href="#login" >   <Google />  {
isSignedIn ?` hello ${user.name}` : ""

}   </Nav.Link>
  </Nav>
    <Nav className="justify-content-end">
      <LinkContainer to='/new'> 
      <Nav.Link >NEW RECIPE</Nav.Link>
      </LinkContainer>
      <Nav.Link href="/list"> ALL RECIPES</Nav.Link>
      <Nav.Link href="/my"> My RECIPES</Nav.Link>

      </Nav>
      </Navbar.Collapse>
      </Container>
</Navbar>


</header>
    )
}

export default Header
