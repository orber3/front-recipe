import React,{useEffect, useState } from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { signOut, signIn } from '../Actions/authAction'

// NOT ACTIVE***************************************************
const Gauth = () => {  

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
            

            console.log(window.gapi.auth2.getAuthInstance().currentUser.get())
            if(window.gapi.auth2.getAuthInstance().isSignedIn.ee==true) {
                dispatch(signIn())

            } else {
                dispatch(signOut())
                window.gapi.auth2.getAuthInstance().signOut()
                    }
        })
    })
    }, []);



const returnLogOutButton = () => { 

    const logOutHandler = () => { 
        dispatch(signOut())
        window.gapi.auth2.getAuthInstance().signOut()

        
    }

    return  (
          
        <button onClick={ logOutHandler } className ="ui red google button">
    <i className = "google icon" />
    sign out
     </button>
        

    )
}
        

const returnLoginButton  =   ()  => {
   const loginHandler = () => { 
     window.gapi.auth2.getAuthInstance().signIn()
     let user = window.gapi.auth2.getAuthInstance().currentUser.get().Es.kt

     dispatch(signIn(user))

}


        return  (
          
            <button onClick={ loginHandler } className ="ui green google button">
        <i className = "google icon" />
        sign in
         </button>
            

        )

    }

return ( 
    <> 
    { isSignedIn==false ?  

    returnLoginButton()
    
:  

    returnLogOutButton()
}


</>
)
}

export default Gauth