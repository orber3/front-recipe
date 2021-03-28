import axios from 'axios'

import { USER_LOGIN_REQUEST,USER_LOGIN_FAIL,USER_LOGIN_LOGOUT,USER_LOGIN_SUCCESS } from '../Constants/userConstants'



export const signIn = ( user) => async (dispatch) =>  {
  let token= user.tokenId
    try { 
        dispatch({ 
            type:  USER_LOGIN_REQUEST,
        })
  
        const config = {
            headers: {
                'content-type': 'application/json'
            },
        }
  
            const {data } = await axios.post(`http://127.0.0.1:5000/api/users` ,{user: user} , config)
  
            dispatch({ 
                type:  USER_LOGIN_SUCCESS,
                payload: data
            })
              
            localStorage.setItem('user' , JSON.stringify(data))
    }catch(e) { 
        
            dispatch({
                type: USER_LOGIN_FAIL,
                payload: e.response && e.response.data.message ? e.response.data.message : e.message
            })
  
    }
  }












//working
// export const signIn = ( user) => async (dispatch) =>  {

//   const config = {
//     headers: {
//         'content-type': 'application/json'
//     },
// }
//   localStorage.setItem('user' , JSON.stringify(user))


//   dispatch({ 
//     type:  "SIGN_IN",
//     payload: user,
// })


//   };
  
  export const signOut = ( ) => async (dispatch) =>  {
    localStorage.removeItem('user')

    
  dispatch({ 
    type: USER_LOGIN_LOGOUT,
  })
  };