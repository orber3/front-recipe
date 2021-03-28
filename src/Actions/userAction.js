
import {USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS,USER_REGISTER_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_LOGOUT, } from "../Constants/userConstants"
import axios from 'axios'


export const registerUser = (name ,  email , password) => async (dispatch) =>  {
    try { 
        dispatch({ 
            type:  USER_REGISTER_REQUEST,
        })
        console.log(name)

        const config = {
            headers: {
                'content-type': 'application/json'
            },
        }

            const {data } = await axios.post('/api/users/register' ,{name, email , password} , config)

            dispatch({ 
                type:  USER_REGISTER_SUCCESS,
                payload: data,
                success: 'success'
            })
              
            dispatch({ 
                type:  USER_LOGIN_SUCCESS,
                payload: data
            })
            
            // dispatch({ 
            //     type:  USER_LOGIN_SUCCESS,
            //     payload: data
            // })

            localStorage.setItem('userInfo' , JSON.stringify(data))
    }catch(e) { 
        
            dispatch({
                type: USER_REGISTER_FAIL,
                payload: e.response && e.response.data.message ? e.response.data.message : e.message
            })

    }
}



export const loginUser = ( email , password) => async (dispatch) =>  {
    try { 
        dispatch({ 
            type:  USER_LOGIN_REQUEST,
        })

        const config = {
            headers: {
                'content-type': 'application/json'
            },
        }

            const {data } = await axios.post('/api/users/login' ,{email , password} , config)

            dispatch({ 
                type:  USER_LOGIN_SUCCESS,
                payload: data
            })

            localStorage.setItem('userInfo' , JSON.stringify(data))
    }catch(e) { 
        
            dispatch({
                type: USER_LOGIN_FAIL,
                payload: e.response && e.response.data.message ? e.response.data.message : e.message
            })

    }
}


export const logoutUser = () => (dispatch) => { 

    localStorage.removeItem('userInfo')
    dispatch({type: USER_LOGIN_LOGOUT})

}