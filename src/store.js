import {  createStore , combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {allRecipeReducer,addRecipeReducer,MyRecipeReducer,getRecipeReducer,editRecipeReducer, recipeDeleteReducer , savePicReducer ,RecipeCreateReviewReducer } from './Reducers/recipeReducer'
import {userRegisterReducer,UserLoginReducer} from './Reducers/userReducer'

const reducer = combineReducers({
    allRecipes: allRecipeReducer,
    addRecipe: addRecipeReducer,
    myRecipes: MyRecipeReducer,
    getRecipe: getRecipeReducer,
    editRecipe: editRecipeReducer,
    deleteRecipe: recipeDeleteReducer,
    userRegister: userRegisterReducer,
    userLogin: UserLoginReducer,
    pic: savePicReducer,
    recipeReviewCreate: RecipeCreateReviewReducer,


})

const userInfosFromStorage = localStorage.getItem('userInfo')
? JSON.parse(localStorage.getItem('userInfo')) : ''

const initialState = {
    userLogin: { userInfo: userInfosFromStorage},
    }

const middleware = [thunk]
const store =createStore(reducer,initialState,composeWithDevTools (applyMiddleware(...middleware)))

export default store