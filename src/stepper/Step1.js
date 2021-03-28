import React , {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useFormContext, Controller } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
    backgroundColor: '#f5f5f5' ,

  },

}));


 const Step1 = ({formContent} ) => {
  const classes = useStyles();

    // const { register, handleSubmit } = useForm();
    const { control } = useFormContext();
    const methods = useFormContext();
    const { reset, register } = methods;

  useEffect(() => {
    reset({ ...formContent.one }, { errors: true });
  }, []);

  return (
    
    <form>
      <Grid container id="registerItem" spacing={4}>

      <Grid item xs={12} md={6} lg={4 }>

        <Controller
      as={TextField}
      name={'recipeName'}
      control={control}
      margin="normal"
      className={classes.textField}
          id="outlined-textarea"
          label="Recipe Name"
          placeholder=""
          multiline
          variant="outlined"
          ref={register({ required: true, minLength: 2 })}

        />
        </Grid> 

  

   <Grid item xs={12} md={6} lg={4 }>
  <Controller
      as={TextField}
      name={'Description'}
      control={control}
      margin="normal"
      className={classes.textField}
      id="outlined-textarea"
          label=" Description"
          placeholder=""
          rows={1}
          multiline
          variant="outlined"
          ref={register({ required: true, minLength: 10 })}

        />
   </Grid>



</Grid>

    </form>

  )


}

export default Step1