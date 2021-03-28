
import React , {useEffect} from 'react'
import { useForm, Controller,} from "react-hook-form";
import { Grid, Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {loginUser} from '../Actions/userAction'
import { useDispatch , useSelector} from 'react-redux'
import Message from '../components/Message'
import { ErrorMessage } from '@hookform/error-message';
import { red } from '@material-ui/core/colors';

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

 const Login = ()=> {
  const classes = useStyles();
  const { handleSubmit, reset, watch, control ,register , errors} = useForm({ defaultValues });
  const dispatch = useDispatch()



  const userLogin = useSelector((state) => state.userLogin)
  const {userInfo , loading , error} = userLogin
  


  const onSubmit = (data) => { 
      

    const { email,password} = data
    dispatch(loginUser( email, password))
  }


  return (
      <> 

          { errors.email ?  <span>  <Message variant='danger'> Use Email Format</Message> </span> : 
           errors.password ? <span>  <Message variant='danger'> password too short </Message> </span> : 
          ''  
        
        }

      {error ?   <Message variant='danger'> {error} </Message> :   "" }
     <form onSubmit={handleSubmit(onSubmit)}>
     <Paper> 

    <Grid id = "registerForm"  
container spacing={2}>
      <Grid item container id="registerItem" justify='flex-center' lg={12} md={12} sm={12}>

<Controller
  as={TextField}
  name={'email'}
  control={control}
  margin="normal"
  className={classes.textField}
      id="outlined-textarea"
      label="Email "
      variant="outlined"
      ref={register({ required: true})}
      rules={{ pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ }}

    />
    </Grid>
    <Grid container id="registerItem" item lg={12} md={12} sm={12}>

<Controller
  as={TextField }
  name={'password'}
  control={control}
  margin="normal"
  className={classes.textField}
      id="outlined-textarea"
      label="Password"
      variant="outlined"
      ref={register({ required: true
    })}
rules ={{minLength: '6'}}
    
    />
    </Grid>


      <Grid container id="RegisterButton" item lg={12} md={12} sm={12}> 

      <Button variant="contained" style={{width: "50%"}} type="submit" color="primary" >
             Login
              </Button>     
               </Grid>

              </Grid>
      </Paper>
              <ErrorMessage errors={errors} name="multipleErrorInput">
        {({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p key={type}>{message}</p>
          ))
        }
      </ErrorMessage>

    </form>
          </>
  );
};


export default Login