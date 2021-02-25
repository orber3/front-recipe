
import { USER_LOGIN_REQUEST,USER_LOGIN_FAIL,USER_LOGIN_LOGOUT,USER_LOGIN_SUCCESS } from '../Constants/userConstants'



// export const signIn = ( user) => async (dispatch) =>  {
//   let token= user.tokenId
//     try { 
//         dispatch({ 
//             type:  USER_LOGIN_REQUEST,
//         })
  
//         const config = {
//             headers: {
//                 'content-type': 'application/json'
//             },
//         }
  
//             // const {data } = await axios.post(`http://192.168.1.21:5000/api/recipe/r` ,{token: token} , config)
  
//             dispatch({ 
//                 type:  USER_LOGIN_SUCCESS,
//                 payload: user
//             })
  
//             localStorage.setItem('user' , JSON.stringify(user))
//     }catch(e) { 
        
//             dispatch({
//                 type: USER_LOGIN_FAIL,
//                 payload: e.response && e.response.data.message ? e.response.data.message : e.message
//             })
  
//     }
//   }













export const signIn = ( user) => async (dispatch) =>  {

  const config = {
    headers: {
        'content-type': 'application/json'
    },
}
  localStorage.setItem('user' , JSON.stringify(user))


  dispatch({ 
    type:  "SIGN_IN",
    payload: user,
})


  };
  
  export const signOut = ( ) => async (dispatch) =>  {
    localStorage.removeItem('user')

    
  dispatch({ 
    type:  "SIGN_OUT",
  })
  };