
import React from 'react'
import {Container } from 'react-bootstrap'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import RecipeListScreen from './screens/recipeListScreen'
import MyRecipeListScreen from './screens/myRecipeListScreen'
import CreateNewRecipe from './screens/createRecipeScreen'
import getRecipeScreen from './screens/getRecipeScreen'
import EditRecipeScreen from './screens/editRecipeScreen'
import HelmetMetaData from "./components/Helemt";

import bootstrap from 'bootstrap'

const App = () => {
    return (
   
        <Router> 
<Header />
<HelmetMetaData></HelmetMetaData>

<main> 
      <Container id="app-container"> 
      <Route path= '/list'  component = {RecipeListScreen}  /> 
      <Route path= '/new'  component = {CreateNewRecipe}  /> 
      <Route path= '/my'  component = {MyRecipeListScreen}  /> 
      <Route path=  '/recipeEdit/:id/edit'  component = {EditRecipeScreen}  />

      <Route path= '/recipe/:id'  component = {getRecipeScreen}  />




      </Container>
</main>
      </Router>

    )
}

export default App
