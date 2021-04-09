


import React from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button } from '@material-ui/core';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import Review from './Review'
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
  


 function ReviewModal(recipeId) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
      
  
    return (
  <> 
  
  <Button  id='reviewButton' onClick={handleOpen} variant="contained" style={{background: "purple"}} color="inherit" >
  <InsertCommentIcon style={{color: 'white'}}  /> Review
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
                
              <Review recipeId={recipeId} handleClose={handleClose}/>
  
              </div>
            </div>
          </Fade>
      </Modal>
      </>
    );
  }
  
  export default ReviewModal