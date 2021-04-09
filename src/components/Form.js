import { Grid, TextField } from '@material-ui/core'
import React from 'react'
import { useForm, Controller,} from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      backgroundColor: '#f5f5f5' ,
      width: '25ch',
    },
    
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  }));
  
  

  const defaultValues = {
    email: "",
    password: ""
  };

function Form(name , label, rules ) {
    const { handleSubmit, reset, watch, control ,register , errors} = useForm({ defaultValues });
    const classes = useStyles();


    return (
      
      <Grid item container id="registerItem" justify='center' lg={12} md={12} sm={12}>

<Controller
  as={TextField}
  name={name}
  control={control}
  margin="normal"
  className={classes.textField}
      id="outlined-textarea"
      label={label}
      variant="outlined"
      ref={register({ required: true})}
      rules={rules}
    />
    </Grid>
    )
}

export default Form


// <Form name="email" 
// label='Email' 
// rules={{ pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ }}
// />