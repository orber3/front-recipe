import React,{useEffect} from 'react'
import Button from '@material-ui/core/Button';
import {LinkContainer} from 'react-router-bootstrap'
import Loader from '../components/Loader'
// import Message from '../component/Message'
import { useDispatch , useSelector} from 'react-redux'
import {getRecipd} from '../Actions/recipeAction'
import RecipeReviewCard from '../components/RecipeCard'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useStyles from '../styles/grid'
import { Typography } from '@material-ui/core'
import Divider from '@material-ui/core/Divider';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ReactImageAppear from 'react-image-appear';
import ReviewModal from '../components/ReviewModal'
import Rating from '../components/rating'

import Message from '../components/Message'





const GetRecipeScreen = ({history,match}) => {

    const classes = useStyles();
    const dispatch = useDispatch()


    useEffect(() => {
      dispatch(getRecipd(match.params.id))

    }, [dispatch, match])



      
    

    const getRecipe = useSelector(state => state.getRecipe)
    const {loading , error ,recipe} = getRecipe

    const recipeId= recipe._id
    return (
        <>
          {
          loading ? <Loader /> :
            <div className={classes.root}> 
<Grid >



<Grid item >
          <Paper className={classes.paper}>
            <Grid container  justify="space-between" spacing={6}>
            <Grid item xs={12}>


{/* recipe name */}
<Paper className={classes.paper}
elevation={0}
>
<Grid
  container
  spacing={4}
>
<Grid item xs={12}  >
  <h2>{ recipe.name}</h2>
</Grid>
</Grid>
  </Paper>
  </Grid>
{/* ///// */}

{/* clock -how much time */}
  <Grid container justify="flex-end" spacing={0} > 
<Grid item xs={1}>
<Paper elevation={0}  id="ns" square className={classes.paper}>
<>     
          <AccessTimeIcon  fontSize="inherit" />
      <br></br>
      <Typography fontSize="inherit">{recipe.cookingTime}
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

    {/* photo container */}
              <Grid  id="photoCon" container  
                justify="flex-end" 
              direction="row"
                spacing={6}>
              <Grid item id ="photo" >

              <ReactImageAppear  id ="photo"
    src={`http://127.0.0.1:5000/api/${recipe.image}`}
/>
                      </Grid>

                  </Grid>


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
                {recipe.ingredients} 
                   
                </Typography>

</Grid>


    </Grid>


                <Divider className={classes.divider} />

                <Grid  container   id="ingCon"
  justify="flex-start" 
 direction="row"
  spacing={6}>

              <Grid item xs={2}>
              <Typography  id="ShowData">
              <b> Description:  </b> 
                </Typography>

              </Grid>
              
              <Grid item  xs={2}>
                <Typography id="ShowData">
                <br></br>

                

                {recipe.description} 
                   
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

              {recipe.directions}
                </Typography>

              </Grid>
              </Grid>

            </Grid>





            <Grid
  container
  direction="row"
  justify="flex-end"
  alignItems="center"
>

          <>
<ReviewModal recipeId={recipe._id} />
         </>

              </Grid>
          </Paper>
          

        </Grid>
<Grid> 
<Paper> 

  </Paper>
  </Grid>


      </Grid>


              <Grid style={{marginBottom: '10px'}}>
              <Paper className={classes.Paper}>
                      <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
               >

        <h2> Reviews</h2>  

       
        </Grid>
        


        {recipe.reviews?
    <Grid item xs={12}>
{recipe.reviews.length == 0 && <Message> no reviews</Message>
}
<Grid style={{marginLeft: '10px'}}>
    {recipe.reviews.map(review => (
           <Grid item key = {`${review._id}`} > 
           <strong> {review.name} </strong>
           <Rating value= {review.rating} /> 
           <p> {review.createdAt.substring(0,10)} </p>
           <p> {review.comment} </p>
           <Divider className={classes.divider} />

           </Grid>

    ))}
    </Grid>
    </Grid>


: 
 console.log('waiting')
}





            </Paper>
              </Grid>





     </div>


                                     }

</>

    )
}

export default GetRecipeScreen
