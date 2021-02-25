import React,{useEffect} from 'react'
import { Table ,Button,Row,Col, CardGroup , Card} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import Loader from '../components/Loader'
// import Message from '../component/Message'
import { useDispatch , useSelector} from 'react-redux'
import {MyRecipeList} from '../Actions/recipeAction'
import RecipeReviewCard from '../components/recipeCard'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useStyles from '../styles/grid'




const MyRecipeListScreen = () => {

    const classes = useStyles();
    const dispatch = useDispatch()
    const myRecipes = useSelector(state => state.myRecipes)
    const{myloading ,   myerror , recipes} = myRecipes

    
    const auth = useSelector((state) => state.auth)
    const {user} = auth

    useEffect(() => {
        dispatch(MyRecipeList(user))
      
    }, [dispatch])
    {console.log(recipes)}

    return (
        <>
          {myloading ? <Loader /> :
            <div className={classes.root}> 
<Grid class="main" container  spacing={2}>
<Grid item lg={12}>
<Grid container justify="center" spacing={2}>
{recipes.map(recipe => (  
        <Grid key = {recipe._id} item  >
          <Paper  className={classes.paper}>

          <RecipeReviewCard name = {recipe.name} user={recipe.user[0].name } ingredients={recipe.ingredients} description = {recipe.description} directions={recipe.directions} date={recipe.date}  image={recipe.image} />

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

export default MyRecipeListScreen
