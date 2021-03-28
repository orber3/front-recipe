import React from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { useState,useEffect } from "react";

import {Container, Nav , Navbar} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
// import Google  from './Google';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import {logoutUser} from '../Actions/userAction'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import LoginModal from './LoginModal'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

import { green, red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
 
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  logOut: { 
     
      color: green,
    
  }
}));



const Header = () => {
  const mediaQuery = window.matchMedia('(min-width: 992px)')
  const classes = useStyles();

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const {userInfo , loading , error} = userLogin

useEffect(() => {
 console.log(userInfo)
}, [userInfo])

  const handleLogOut = () => { 
dispatch(logoutUser())
  }

    return (
        <header className='header'>


<Navbar  bg="light" variant= 'dark' expand="lg" collapseOnSelect >
  <Container id="headerCon">
  

  <Navbar.Brand href="#home"> 
  {/* <img src="../PICS/logo.jpg" alt="Recipe House" class="logo" />    */}
Recipe-House
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav ">
    
    <Nav className="justify-content-start" id-="left-nav">
      <LinkContainer to='/stepper'> 
      <Nav.Link >NEW RECIPE       <AddCircleIcon style={{ color: '#b71c1c' }} />
</Nav.Link>

      </LinkContainer>


      <Nav.Link href="/list"> ALL RECIPES</Nav.Link>
      { userInfo ?
         <Nav.Link href="/my"> My RECIPES</Nav.Link>
: ""
    }

   </Nav>

{ !userInfo ?
<Nav id="register-btn justify-content-end">
<LinkContainer to='/register'> 
      <Nav.Link >register</Nav.Link>
      </LinkContainer>
     <LoginModal />
</Nav>
: 

<Button onClick={handleLogOut}   style={{ color: '#b71c1c' }}  className={classes.logOut}
>
<PermIdentityIcon  /> LogOut
              </Button>  }
      
      </Navbar.Collapse>
      </Container>
</Navbar>


</header>
    )
}

export default Header
