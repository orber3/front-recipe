import React,{useEffect, useState } from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { signOut, signIn } from '../Actions/authAction'
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

const Google = () => {  

  const auth = useSelector((state) => state.auth)
  const {isSignedIn} = auth
  const dispatch = useDispatch()


var authObj
useEffect(() => {
    window.gapi.load('auth2',()=> {
        window.gapi.auth2.init({ 
            clientId:'804267482082-d6nsm6snr43b6v7be897fdii1pht6uc6.apps.googleusercontent.com',
        scope: 'email profile',
    }).then (() =>{  
        authObj = window.gapi.auth2.getAuthInstance() ;
        authObj.isSignedIn.listen();
    } )
  } )
}, []);




const responseGoogle =(response) => { 
  // inside response i can find the user object and the token - FOR LATER USE
  // let user = window.gapi.auth2.getAuthInstance().currentUser.get().Es.kt
  let user = response.profileObj
  dispatch(signIn(user))
}

const logOutHandler = () => { 
  dispatch(signOut())
}



      return ( 
        <> { isSignedIn ?  (
         <GoogleLogout
          clientId="804267482082-d6nsm6snr43b6v7be897fdii1pht6uc6.apps.googleusercontent.com"
          render={renderProps => (
            <button onClick={renderProps.onClick} className ="ui red google button"
         disabled={renderProps.disabled}> <i className = "google icon" /> LogOut  </button>
          )}
          buttonText="Logout of Google	"
          onLogoutSuccess={logOutHandler}
          isSignedIn={false}
        />
         )
        
        : (
        <GoogleLogin
        clientId="804267482082-d6nsm6snr43b6v7be897fdii1pht6uc6.apps.googleusercontent.com"
        render={renderProps => (
          <button onClick={renderProps.onClick} className ="ui green google button"
       disabled={renderProps.disabled}> <i className = "google icon" /> LogIn  </button>
        )}


        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
      
        )
      }
      </>
      )
      
       
      
    
      
    

}

  export default Google

