import {  createStore , combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {allRecipeReducer,addRecipeReducer,MyRecipeReducer,getRecipeReducer,editRecipeReducer, recipeDeleteReducer } from './Reducers/recipeReducer'
import {authReducer} from './Reducers/authReducer'


const reducer = combineReducers({
    allRecipes: allRecipeReducer,
    addRecipe: addRecipeReducer,
    auth: authReducer,
    myRecipes: MyRecipeReducer,
    getRecipe: getRecipeReducer,
    editRecipe: editRecipeReducer,
    deleteRecipe: recipeDeleteReducer,

})

const userInfosFromStorage = localStorage.getItem('user')
? JSON.parse(localStorage.getItem('user')) : []

const initialState = {
    auth: { user: userInfosFromStorage},

  
    
    }


const middleware = [thunk]
const store =createStore(reducer,initialState,composeWithDevTools (applyMiddleware(...middleware)))

export default store