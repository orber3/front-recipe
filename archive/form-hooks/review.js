
import React,{useEffect,useState} from 'react'
import Divider from '@material-ui/core/Divider';
import useStyles from '../../../styles/grid'
import { Grid, Paper, Typography } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ReactImageAppear from 'react-image-appear';
import { Button, Row } from 'react-bootstrap';
const Review = ({ setForm, formData, navigation }) => {
    const {
        name,
       image, images,
       description,ingredients,cookingTime,directions,catagory
      } = formData;
  const { go } = navigation;

  console.log(image)
  
      const classes = useStyles();
      const { previous, next } = navigation;

      return (
  
  <Grid class ="main" container   justify="space-around"  spacing={2}>
  
  
  <Grid item >
              <Grid container  justify="space-between" spacing={6}>
              <Grid item xs={12}>
  
  
  {/* recipe name */}
  <Paper className={classes.paper}
  elevation={0.5}
  >
  <Grid
    container
    spacing={4}
  >
  <Grid item xs={12}  >
    <h2>{name}</h2>
    <h6>  {description} </h6>
    <h2> {images} </h2>
    
  </Grid>
  </Grid>
    </Paper>
    </Grid>
  {/* ///// */}
  
  {/* clock -how much time */}
    <Grid container justify="flex-end" spacing={0} > 
  <Grid item xs={0}>
  <Paper elevation={0}  id="ns" square className={classes.paper}>
  <>     
            <AccessTimeIcon  fontSize="8px" />
        <br></br>
        <Typography fontSize="8px">{cookingTime}
   </Typography>
  </>  
    </Paper>
    </Grid>
  
  </Grid>
  {/* /////// */}
  
  
  
    </Grid>
    <Grid container  
    justify="flex-start" 
   direction="column"
    spacing={6}>
  
  
       <Grid id="ingCon" container  
    justify="flex-start" 
   direction="row"
    spacing={6}>
  
       <Grid item xs={2}>
  
                  <Typography id="ShowData">
                 <b> ingredients:  </b>   <br></br> 
                   
                  </Typography>
  
                  </Grid>
  
  
                  <Grid item  xs={2}>
                  <Typography id="ShowData">
                    <br></br>
                  {ingredients} 
                     
                  </Typography>
  
  </Grid>
  
  
      </Grid>
  
  
                  <Divider className={classes.divider} />
  
  
  
  
                <Grid  container  id="ingCon"
    justify="flex-start" 
   direction="row"
    spacing={6}>
  
                <Grid item xs={2}>
                <Typography     id="ShowData">
                <b> Directions:  </b>   <br></br>  
                  </Typography>
                </Grid>
                
                <Grid item xs={2}>
                <Typography     id="ShowData">
                <br></br>
                {directions}
                  </Typography>
  
                </Grid>
                </Grid>
                <Divider className={classes.divider} />
  
              </Grid>
  
  
  
      {/* photo container */}
      
  
      {image ?     
  <Grid  id="photoCon" container  
              justify="flex-end" 
            direction="row"
              spacing={6}>
            <Grid item id ="photo" >
  
            <ReactImageAppear  id ="photo"
  src={`http://127.0.0.1:5000/api/${image}`}
  />
                    </Grid>
  
                </Grid>
                :" upload image" } 
  
  
  
  
          </Grid>
            <Row> 

  </Row>

  
  <Button onClick={previous}>Previous</Button>

<Button variant="primary" className= "btn btn-primary float-right" onClick={() => go("submit")} type="submit">
submit
</Button>
        </Grid>
  
      )
  }
  
  
    
  export default Review
  