import {RECIPE_LIST_REQUEST ,RECIPE_LIST_SUCCESS , RECIPE_LIST_FAIL} from '../Constants/recipeConstants'
import {RECIPE_ADD_REQUEST ,RECIPE_ADD_SUCCESS , RECIPE_ADD_FAIL} from '../Constants/recipeConstants'
import {MY_RECIPE_LIST_REQUEST ,MY_RECIPE_LIST_SUCCESS , MY_RECIPE_LIST_FAIL} from '../Constants/recipeConstants'
import {GET_RECIPE_REQUEST ,GET_RECIPE_SUCCESS , GET_RECIPE_FAIL} from '../Constants/recipeConstants'
import {EDIT_RECIPE_REQUEST ,EDIT_RECIPE_SUCCESS , EDIT_RECIPE_FAIL} from '../Constants/recipeConstants'
import {DELETE_RECIPE_REQUEST ,DELETE_RECIPE_SUCCESS , DELETE_RECIPE_FAIL} from '../Constants/recipeConstants'



export const allRecipeReducer = (state = {recipes: []},  action) => { 

    switch(action.type) {
        case RECIPE_LIST_REQUEST:
        return {
            loading: true
        }
        case RECIPE_LIST_SUCCESS:
        return { 
            loading: false,
            recipes: action.payload

        }
        case RECIPE_LIST_FAIL:
            return { 
                loading: false , 
                error: action.payload
            }
            

        default:
            return state
    }
    
    }

    export const addRecipeReducer = ( state = {} , action ) => { 

        switch(action.type) {
            case RECIPE_ADD_REQUEST:
            return {
                loading: true
            }
            case RECIPE_ADD_SUCCESS:
            return { 
                loading: false,
                success: true,
                recipe: action.payload
    
            }
            case RECIPE_ADD_FAIL:
                return { 
                    loading: false , 
                    success: false,

                    error: action.payload
                }
                
    
            default:
                return state
        }
        
        }

        
export const MyRecipeReducer = (state = {recipes: []},  action) => { 

    switch(action.type) {
        case MY_RECIPE_LIST_REQUEST:
        return {
            myloading: true
        }
        case MY_RECIPE_LIST_SUCCESS:
        return { 
            myloading: false,
            recipes: action.payload

        }
        case MY_RECIPE_LIST_FAIL:
            return { 
                myloading: false , 
                myerror: action.payload
            }
            

        default:
            return state
    }
    
    }


    //single recipe reducer

    
export const getRecipeReducer = ( state = {recipe: {} } , action ) => { 

    switch(action.type) { 
    
        case GET_RECIPE_REQUEST:
        return { loading: true , ...state }
        
        case GET_RECIPE_SUCCESS:
        return { loading: false , recipe: action.payload }
    
        case GET_RECIPE_FAIL:
        return { loading: false , error: action.payload }
    
        default:
            return state
    
    
    }
    
    }

    // edit recipe
    export const editRecipeReducer = ( state = {} , action ) => { 

        switch(action.type) {
            case EDIT_RECIPE_REQUEST:
            return {
                loading: true
            }
            case EDIT_RECIPE_SUCCESS:
            return { 
                loading: false,
                success: true,
                recipe: action.payload
    
            }
            case EDIT_RECIPE_FAIL:
                return { 
                    loading: false , 
                    success: false,

                    error: action.payload
                }
                
    
            default:
                return state
        }
        
        }



        //delete reducer
    
export const recipeDeleteReducer = ( state = {} , action ) => { 

    switch(action.type) { 
    
        case DELETE_RECIPE_REQUEST:
        return { loading: true , ...state }
        
        case DELETE_RECIPE_SUCCESS:
        return { loading: false , success: true }
    
        case DELETE_RECIPE_FAIL:
        return { loading: false , error: action.payload }
    
        default:
            return state
    
    
    }
    
    }
