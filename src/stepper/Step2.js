
import React , {useEffect} from 'react'
import { useFormContext, Controller,} from "react-hook-form";
import { FormControl, Grid, InputLabel, MenuItem } from '@material-ui/core';
import Select from '@material-ui/core/Select';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

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


 const Step2 = ({formContent}) => {
  const classes = useStyles();
  const { control } = useFormContext();
  const methods = useFormContext();
  const { reset, register,watch } = methods;
  const imageValue = watch("image");



  const catagories = [
    { value: "Asian", text: "Asian" },
    { value: "Israeli", text: "Israeli" },
    { value: "Junk-Food", text: "Junk-Food" },
    { value: "Italian", text: "Italian" },

];




useEffect(() => {
  reset({ ...formContent.two }, { errors: true });
}, []);


  return (
      <> 
    <form>
    <Grid container id="registerItem" spacing={4}>
    <Grid item style={{marginLeft: '3%'}} xs={12}  md={6} lg={5 }>

    <Controller
      as={TextField}
      name={'Ingridents'}
      control={control}
      margin="normal"
      className={classes.textField}
          id="outlined-textarea"
          label="Recipe Ingridents"
          defaultValue={'Ingridents'}
          multiline
          style={{width: '40ch'}}
          variant="outlined"
          rows={8}
          ref={register({ required: true, minLength: 2 })}

        />
      </Grid>
  
      <Grid item  style={{marginLeft: '25%'}} xs={12} md={4} lg={3 }>
      
  <Controller
      as={TextField}
      name={'cookingTime'}
      control={control}
      className={classes.textField}
      margin="normal"
      style={{ width: '15ch' }}
      id="outlined-textarea"
          label=" Cooking Time"
          placeholder=""
          multiline
          defaultValue={'10 mins'}

          variant="outlined"
          ref={register({ required: true, min: 2 })}

        />

        
<Grid item  style={{marginTop: '15px', marginLeft: '3%' }} xs={2} md={3} lg={3}>
<InputLabel htmlFor="Catagory-select">
Choose Catagory    </InputLabel>
  <FormControl>

    <Controller
    control={control}
    name="catagoryy"
    defaultValue={'Asian'}

    as={
      <Select id="catagory-select"
onChange={e => register({ name: 'catagory', value: e.target.value })}>
          {catagories.map((catagory) => (
                  <MenuItem key={catagory.value} value={catagory.value}>
                        {catagory.text}
                    </MenuItem>
          ))}
      </Select>

    }

  />
      </FormControl>

      </Grid>
   </Grid>
      </Grid>
    </form>

          </>
  );
};


export default Step2