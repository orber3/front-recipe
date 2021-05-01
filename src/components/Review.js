
import React , {useEffect} from 'react'
import { useForm, Controller,} from "react-hook-form";
import { Grid, InputLabel, Paper, RadioGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {createRecipeReview} from '../Actions/recipeAction'
import { useDispatch , useSelector} from 'react-redux'
import Message from '../components/Message'
import { ErrorMessage } from '@hookform/error-message';
import { red } from '@material-ui/core/colors';
import {
    TextField,
    createMuiTheme,
    ThemeProvider,
    FormControlLabel,
    Radio,
    
  } from "@material-ui/core";

  const theme = createMuiTheme({
    palette: {
      type: "dark"
    }
  });

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
    rating: 0,
    comment: ""
  };

 const Review = (recipeId,handleClose)=> {
     
  const classes = useStyles();
  const { handleSubmit, reset, watch, control ,register , errors} = useForm({ defaultValues });
  const dispatch = useDispatch()

const rId=recipeId.recipeId

  const recipeReviewCreate = useSelector((state) => state.recipeReviewCreate)
  const {  error: reviewError} = recipeReviewCreate
  console.log(recipeReviewCreate)
  
  const userLogin = useSelector((state) => state.userLogin)
  const {userInfo , loading , error} = userLogin
  
  // console.log(state)



  const onSubmit = (data) => { 
      
    const { rating , comment} = data

    dispatch(createRecipeReview({rating,comment,rId}))
    // handleClose()
    }


  return (
      <> 

          {  
           errors.comment ? <div data-test="message">  <Message variant='danger'> comment too short </Message> </div> : 
          ''  
        
        }

      {reviewError ?   <Message variant='danger'> {reviewError} </Message> :   "" }

     <form onSubmit={handleSubmit(onSubmit)}>
     <Paper data-test="review-div"> 
     <ThemeProvider >

    <Grid id = "registerForm"  
container spacing={3}>
      <Grid item container id="registerItem" justify='center' lg={12} md={12} sm={12}>

<Controller
  as={TextField}
  name={'comment'}
  data-test={"comment"}
  rows={3}
  fullWidth
          multiline
            control={control}
  margin="normal"
  className={classes.textField}
      id="outlined-textarea"
      label="comment "
      variant="outlined"
      ref={register({ required: true})}
      rules ={{ required: true , minLength: '6'}}

    />
    </Grid>
    <Grid container id="registerItem" item lg={12} md={12} sm={12}>



    <InputLabel >
    Recipe Rating    </InputLabel>
            <Controller
              as={
                <RadioGroup aria-label="rating">
                  <FormControlLabel
                    value='1'
                    control={<Radio />}
                    label="1"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="2"
                  />
                    <FormControlLabel
                    value="3"
                    control={<Radio />}
                    label="3"
                  />
                    <FormControlLabel
                    value="4"
                    control={<Radio />}
                    label="4"
                  />
                    <FormControlLabel
                    value="5"
                    control={<Radio />}
                    label="5"
                  />
                </RadioGroup>
              }
              name="rating"
              control={control}
            />

    
    </Grid>


      <Grid container id="RegisterButton" item lg={12} md={12} sm={12}> 

      <Button data-test="submit-button" variant="contained" style={{width: "50%"}} type="submit" color="primary" >
             Submit
              </Button>     
               </Grid>

              </Grid>
              </ThemeProvider>
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


export default Review