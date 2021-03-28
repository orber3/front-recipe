import React , {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useFormContext, Controller } from "react-hook-form";
import { Grid, GridList, Paper, Typography } from '@material-ui/core';
import useStyles from '../styles/grid'
import ReactImageAppear from 'react-image-appear';
import AccessTimeIcon from '@material-ui/icons/AccessTime';


 const Review = ({formContent , images}) => {
  const classes = useStyles();


  const pic = useSelector((state) => state.pic)
  const {picLink} = pic

  const { control } = useFormContext();
  const methods = useFormContext();
  const { reset, register , getValues ,watch } = methods;
  const values = getValues()
  useEffect(() => {
    reset({ ...formContent.four }, { errors: true });
  }, []);

const form = formContent
console.log(form)
  return (
    <>  

      <Grid Container
        
  direction="row"
  justify="center"
  alignItems="center"
>
  <Grid Item>

<Paper className={classes.paper}
elevation={0.5}
>
    <h1> {form.one.recipeName} </h1>
    <h4> {form.one.Description} </h4>
    <h2> {form.three.pic} </h2>

    </Paper>

    
    <Grid Item style={{marginTop: "12px"}}> 
Best {form.two.catagoryy} dish </Grid>
<br/>
only {form.two.cookingTime}  mintues away <AccessTimeIcon />
    </Grid> 


        
          {/* photo container */}
          <Grid  id="photoCon" container  
                justify="flex-end" 
              direction="row"
                spacing={6}>
              <Grid item id ="photo" >

              <ReactImageAppear  id ="photo"
    src={`http://127.0.0.1:5000/api/${picLink}`}
/>
                      </Grid>
                     

                  </Grid>

                  <Grid Container id="mainReview">

                  <Grid Item style={{marginTop: '10px' , marginBottom: '10px'}}> 
            <h5>  Ingridents:  </h5> 
          <Typography> 
          {form.two.Ingridents}
          </Typography>
              </Grid>
              <Grid Item style={{marginTop: '10px'}}> 
            <h5>  instructions:  </h5> 
          <Typography> 
          {form.three.directions}
          </Typography>
              </Grid>
        
        
          </Grid>
                  
        
        
        </Grid> 




    </>
  )
}
export default Review