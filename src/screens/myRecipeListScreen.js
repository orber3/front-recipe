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
import Message from '../components/Message'




const MyRecipeListScreen = () => {

    const classes = useStyles();
    const dispatch = useDispatch()
    const myRecipes = useSelector(state => state.myRecipes)
    const{myloading ,   myerror , recipes} = myRecipes

    
  const userLogin = useSelector((state) => state.userLogin)
  const {userInfo } = userLogin

let name = ''
  if(userInfo) {
const {name} = userInfo
  } else { 
    name ="default" } 

    useEffect(() => {
        dispatch(MyRecipeList())
      
    }, [dispatch])
    {console.log(recipes)}

    return (
        <>
          {myloading ? <Loader /> : myerror? 
          <Message variant="danger"> {myerror}  - no user recipes </Message> :
            <div className={classes.root}> 
<Grid class="main" container  spacing={2}>
<Grid item lg={12}>
<Grid container justify="center" spacing={2}>
{recipes.map(recipe => (  
        <Grid key = {recipe._id} item  >
          <Paper  className={classes.paper}>
{console.log(recipe.user)
}
<RecipeReviewCard id={recipe._id}cookingTime={recipe.cookingTime} name = {recipe.name} user={recipe.user} ingredients={recipe.ingredients} description = {recipe.description} directions={recipe.directions} date={recipe.date}  image={recipe.image} />

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
