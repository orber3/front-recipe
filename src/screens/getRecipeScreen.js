import React,{useEffect} from 'react'
import { Table ,Button,Row,Col, CardGroup , Card, ListGroup, ListGroupItem, Image} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import Loader from '../components/Loader'
// import Message from '../component/Message'
import { useDispatch , useSelector} from 'react-redux'
import {getRecipd} from '../Actions/recipeAction'
import RecipeReviewCard from '../components/recipeCard'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useStyles from '../styles/grid'
import { Typography } from '@material-ui/core'
import Divider from '@material-ui/core/Divider';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ReactImageAppear from 'react-image-appear';







const GetRecipeScreen = ({history,match}) => {

    const classes = useStyles();
    const dispatch = useDispatch()

    const auth = useSelector((state) => state.auth)
    const {user} = auth

    useEffect(() => {
      dispatch(getRecipd(match.params.id))

    }, [dispatch, match])




      
    

    const getRecipe = useSelector(state => state.getRecipe)
    const {loading , error ,recipe} = getRecipe


    return (
        <>
          {loading ? <Loader /> :
            <div className={classes.root}> 
<Grid class ="main" container   justify="space-around"  spacing={2}>



<Grid item >
          <Paper className={classes.paper}>
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
  <h2>{ recipe.name}</h2>
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
      <Typography fontSize="8px">{recipe.cookingTime}
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
    src={`http://192.168.1.21:5000/api/${recipe.image}`}
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
              {recipe.directions}
                </Typography>

              </Grid>
              </Grid>
              <Divider className={classes.divider} />

            </Grid>







          </Paper>
        </Grid>




      </Grid>
     </div> }

</>

    )
}

export default GetRecipeScreen