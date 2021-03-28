import React , {useEffect, useState} from 'react'
import { useFormContext, Controller } from "react-hook-form";
import { Grid, InputLabel, MenuItem } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl } from 'react-bootstrap';
import axios from 'axios'
import {savepic} from '../Actions/recipeAction'
import { useDispatch , useSelector} from 'react-redux'

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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
      },
      chips: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      chip: {
        margin: 2,
      },
      noLabel: {
        marginTop: theme.spacing(3),
      },
    
  }));
  
const Step3 = ({formContent}) => {
    const { control } = useFormContext();
    const dispatch = useDispatch()

    const methods = useFormContext();
    const { reset, register } = methods;
    const classes = useStyles();

    const picChange = async (file) => { 
      dispatch(savepic(file))

        console.log(file.target.files[0])
    }



    useEffect(() => {

      reset({ ...formContent.three }, { errors: true });
    }, []);
  
    return (
        <> 
      <form>
      <Grid container id="registerItem" spacing={2}>
    <Grid item xs={12} md={9} lg={7}>

    <Controller
      as={TextField}
      name={'directions'}
      control={control}
      margin="normal"
      className={classes.textField}
          id="outlined-textarea"
          label="Recipe Instructions"
          multiline
          style={{width: '70%'}}
          defaultValue=""
          variant="outlined"
          rows={8}
          ref={register({ required: true, minLength: 15 })}

        />
        </Grid>

      <Grid item style={{marginRight: '2px'}}xs={2} md={3} lg={3}>
      <InputLabel htmlFor="Pic-upload">
Upload Picture    </InputLabel>

      <Controller
          name="pic"  
          control={control}
          defaultValue=""
        onChange={picChange}
      render={(
        { onChange, onBlur, value, name, ref },      ) => (
        <input
        type="file"
        name='inpname'
          ref={register} 
          onChange={picChange}
      /> )
      }

    /> 
{/* 

<input       defaultValue={[]}
   control={control}
 type="file" name="picture" /> */}
</Grid>
      </Grid>
      </form>
      </>
    );
  };

  export default Step3