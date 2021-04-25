import { AppBar, Toolbar } from '@material-ui/core';
import React from 'react'
import HeaderModal from './HeaderModal'
import {Link} from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
import { useDispatch , useSelector} from 'react-redux'
import LoginModal from './LoginModal'

import {logoutUser} from '../Actions/userAction'
import {LinkContainer} from 'react-router-bootstrap'

import {StyledMenu ,StyledMenuItem,  useStyles} from './HeaderStyles'

const Header = () => { 

    const classes = useStyles();
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const {userInfo , loading , error} = userLogin
    
  const handleLogOut = () => { 
    dispatch(logoutUser())
      }
      let name
      userInfo ?
       name=userInfo.name
      : name="undefined"
return (
    <div className={classes.root}  data-test = "header-comp">

    <AppBar style={{ 
      position: "sticky",   color: 'primary'}} >
      <Grid container style={{height: '20px' , width: '60px'}}> 
      
      <HeaderModal name={name} /> 

      </Grid >

      {
         !userInfo ?
         <IconButton className={classes.user}
         aria-label="account of current user"
         aria-controls="menu-appbar"
         aria-haspopup="true"
         onClick={handleLogOut}
                         color="inherit"
         style={{marginBottom: '10px'}}
       >
<LoginModal name={name} />
</IconButton>
              :

              <IconButton className={classes.user}
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleLogOut}
                                color="inherit"
                style={{marginBottom: '10px'}}
              >
                LogOut
                <AccountCircle style={{color: 'red'}} onClick={handleLogOut}/>
              </IconButton>
              

}
          </AppBar>
    </div>
)
}

export default Header