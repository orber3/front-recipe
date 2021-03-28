
import React from 'react'
import {Container } from 'react-bootstrap'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import RecipeListScreen from './screens/recipeListScreen'
import MyRecipeListScreen from './screens/myRecipeListScreen'
// import CreateNewRecipe from '../archive/form-hooks/createRecipeScreen'
import getRecipeScreen from './screens/getRecipeScreen'
import EditRecipeScreen from './screens/editRecipeScreen'
import HelmetMetaData from "./components/Helemt";

import bootstrap from 'bootstrap'
import NewRecipeScreen from './screens/newRecipeScreen'
import WebRecipesScreen from './screens/webRecipesScreen'
import RegisterForm from './screens/createUserScreen'
import StepperV from './stepper/stepper'
import Login from './components/login'
import Review from './stepper/Review'
import { useForm, FormProvider } from "react-hook-form";


const App = () => {
  const methods = useForm({ mode: "onBlur" });
const { watch, errors } = methods;

    return (
   
        <Router> 
<Header />

<main> 
      <Container id="app-container"> 
      <Route path= '/list'  component = {RecipeListScreen}  /> 
      <Route path= '/create'  component = {NewRecipeScreen}  /> 
      <FormProvider {...methods}>
      <Route path= '/stepper'  component = {StepperV}  /> 
      </FormProvider>
      <Route path= '/register'  component = {RegisterForm}  /> 
      <Route path= '/login'  component = {Login}  /> 

      <Route path= '/my'  component = {MyRecipeListScreen}  /> 
      <Route path=  '/recipeEdit/:id/edit'  component = {EditRecipeScreen}  />
      <Route path= '/recipe/:id'  component = {getRecipeScreen}  />
      <Route path= '/3rdparty'  component = {WebRecipesScreen}  /> 


      

      </Container>
</main>
      </Router>

    )
}

export default App
