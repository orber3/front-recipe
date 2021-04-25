


import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, Grid } from '@material-ui/core';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Login from './Login'
import { green, red } from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
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
  


 function LoginModal({  }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
      
  
    return (
<Grid> 

  <Button  onClick={handleOpen} id="loginButton" color="default" >
  <PermIdentityIcon  /> login
                </Button>  
  
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        closeAfterTransition
        open={open}
        onClose={handleClose}
  
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
      <Fade in={open}>
            <div className={classes.paper}>
              <div id="transition-modal-description">
                
              <Login />
  
              </div>
            </div>
          </Fade>
      </Modal>
      </Grid>  
    );
  }
  
  export default LoginModal