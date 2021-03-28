import React,{useEffect} from 'react'
import { Table ,Button,Row,Col, CardGroup , Card} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import Loader from '../components/Loader'
// import Message from '../component/Message'
import { useDispatch , useSelector} from 'react-redux'
import {listAllRecipes} from '../Actions/recipeAction'
import RecipeReviewCard from '../components/recipeCard'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useStyles from '../styles/grid'




const RecipeListScreen = ({history,match}) => {

    const classes = useStyles();
    const dispatch = useDispatch()

    const allRecipes = useSelector(state => state.allRecipes)
    const{loading , error , recipes} = allRecipes


    useEffect(() => {
        dispatch(listAllRecipes())
      
    }, [dispatch])

    return (
        <>
          {loading ? <Loader /> :
            <div className={classes.root}> 
<Grid   container  id="listgrid" spacing={2}>
<Grid item lg={12}>
<Grid container  justify="center" spacing={2}>

{recipes.map(recipe => (  

        <Grid key = {recipe._id} item  >
          <Paper  className={classes.paper}>

          <RecipeReviewCard id={recipe._id}cookingTime={recipe.cookingTime} name = {recipe.name} user={recipe.user} ingredients={recipe.ingredients} description = {recipe.description} directions={recipe.directions} date={recipe.date}  image={recipe.image} rating={recipe.rating} numReviews={recipe.numReviews} />

          </Paper>
          
</Grid>
          
) ) }
</Grid>
</Grid>
</Grid>
</div>

}
</>

    )
}

export default RecipeListScreen
