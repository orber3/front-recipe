import axios from 'axios'
import {RECIPE_LIST_REQUEST ,RECIPE_LIST_SUCCESS , RECIPE_LIST_FAIL} from '../Constants/recipeConstants'
import {RECIPE_ADD_REQUEST ,RECIPE_ADD_SUCCESS , RECIPE_ADD_FAIL} from '../Constants/recipeConstants'
import {MY_RECIPE_LIST_REQUEST ,MY_RECIPE_LIST_SUCCESS , MY_RECIPE_LIST_FAIL} from '../Constants/recipeConstants'
import {GET_RECIPE_REQUEST ,GET_RECIPE_SUCCESS , GET_RECIPE_FAIL} from '../Constants/recipeConstants'
import {EDIT_RECIPE_REQUEST ,EDIT_RECIPE_SUCCESS , EDIT_RECIPE_FAIL} from '../Constants/recipeConstants'
import {DELETE_RECIPE_REQUEST ,DELETE_RECIPE_SUCCESS , DELETE_RECIPE_FAIL} from '../Constants/recipeConstants'
import {RECIPE_CREATE_REVIEW_REQUEST , RECIPE_CREATE_REVIEW_SUCCESS, RECIPE_CREATE_REVIEW_FAIL} from '../Constants/recipeConstants'
import {BASE_URL} from '../Constants/recipeConstants'



export const listAllRecipes = () => async (dispatch,getState) =>  {
    try { 

        dispatch({ 
            type:  RECIPE_LIST_REQUEST,
        })
        const config = {
            headers: {
                'content-type': 'application/json'
            },
        }
        const {data } = await axios.get(`${BASE_URL}/api/recipe/r`, )
            dispatch({ 
                type:  RECIPE_LIST_SUCCESS,
                payload: data,
            })
            
    }catch(e) { 
        
            dispatch({
                type: RECIPE_LIST_FAIL,
                payload: e.response && e.response.data.message ? e.response.data.message : e.message
            })

    }
}



export const createRecipe = (recipe) => async (dispatch,getState) =>  {
    try { 
        dispatch({ 
            type:  RECIPE_ADD_REQUEST,
        })

        const {userLogin: {userInfo },  } = getState()
        console.log(userInfo)
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

            const {data } = await axios.post(`${BASE_URL}/api/recipe/r`  ,recipe, config)
       
            dispatch({ 
                type:  RECIPE_ADD_SUCCESS,
                payload: data
            })
            
    }catch(e) { 
        
            dispatch({
                type: RECIPE_ADD_FAIL,
                payload: e.response && e.response.data.message ? e.response.data.message : e.message
            })

    }
}




export const MyRecipeList = () => async (dispatch,getState) =>  {

    try { 

        dispatch({ 
            type:  MY_RECIPE_LIST_REQUEST,
        })

        const {userLogin: {userInfo },  } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const {data } = await axios.get(`${BASE_URL}/api/recipe/my` , config)

            dispatch({ 
                type:  MY_RECIPE_LIST_SUCCESS,
                payload: data,
            })
    }catch(e) { 
        
            dispatch({
                type: MY_RECIPE_LIST_FAIL,
                payload: e.response && e.response.data.message ? e.response.data.message : e.message
            })

    }
}




//get one recipe 


export const getRecipd = (id) => async (dispatch,getState) => { 

    try { 
        dispatch({ type: GET_RECIPE_REQUEST})
    
        const {data } = await axios.get(`${BASE_URL}/api/recipe/${id}`)

        dispatch({
            type: GET_RECIPE_SUCCESS,
            payload: data
        })
    }
     catch(e)
    {
     dispatch({
         type: GET_RECIPE_FAIL,
         payload: e.response && e.response.data.message ? e.response.data.message : e.message
     })
    
    }
    
    
    
    }


    // edit recipe


    
export const editRecipeAction = (recipe , id) => async (dispatch,getState) =>  {
    try { 

        dispatch({ 
            type:  EDIT_RECIPE_REQUEST,
        })

        const {userLogin: {userInfo },  } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }
            const {data } = await axios.put(`${BASE_URL}/api/recipe/${recipe.id}` ,recipe, config)

            dispatch({ 
                type:  EDIT_RECIPE_SUCCESS,
                success: data
            })
            
    }catch(e) { 
        
            dispatch({
                type: EDIT_RECIPE_FAIL,
                payload: e.response && e.response.data.message ? e.response.data.message : e.message
            })

    }
}

    


    // DELETE recipe


    
    export const deleteRecipeAction = (recipe) => async (dispatch,getState) =>  {
        try { 
    
            dispatch({ 
                type:  DELETE_RECIPE_REQUEST,
            })
    
            const {userLogin: {userInfo },  } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }
                const {data } = await axios.delete(`${BASE_URL}/api/recipe/${recipe}` , config)
    
                dispatch({ 
                    type:  DELETE_RECIPE_SUCCESS,
                    success: data
                })
                
        }catch(e) { 
            
                dispatch({
                    type: DELETE_RECIPE_FAIL,
                    payload: e.response && e.response.data.message ? e.response.data.message : e.message
                })
    
        }
    }
    

export const savepic = (file) => async (dispatch,getState) =>  {
    try { 
       
        dispatch({ 
            type:  'SAVE_PIC_REQUEST',
        })
        const fileu = file.target.files[0]
        const formData = new FormData()
        formData.append('image', fileu)
     
      const config = { 
        headers : { 
            'Content-Type' : 'multipart/form-data'
        }
      } 
      
      const { data } = await axios.post(`${BASE_URL}/api/uploads` , formData , config)


            dispatch({ 
                type:  'SAVE_PIC_SUCCESS',
                payload: data
            })
            
    }catch(e) { 
        
            dispatch({
                type: 'SAVE_PIC_FAIL',
                payload: e.response && e.response.data.message ? e.response.data.message : e.message
            })

    }
}


export const createRecipeReview = ( review) => async (dispatch, getState) => { 
    
const recipeId = review.rId.recipeId
console.log(recipeId)

    try { 
        dispatch({ type: RECIPE_CREATE_REVIEW_REQUEST})
        
        const {userLogin: {userInfo },  } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }
        
   await axios.post(`${BASE_URL}/api/recipe/review/${recipeId}` ,review, config)
        dispatch({
            type: RECIPE_CREATE_REVIEW_SUCCESS,
          
        })
    }
     catch(e)
    {
     dispatch({
         type: RECIPE_CREATE_REVIEW_FAIL,
         payload: e.response && e.response.data.message ? e.response.data.message : e.message
     })
    
    }
    
    
    
    }
