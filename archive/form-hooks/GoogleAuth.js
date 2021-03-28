

import React from 'react';
import {signIn, signOut} from '../Actions/authAction'



// NOT ACTIVE***********************************


class GoogleAuth extends React.Component { 
    componentDidMount() { 

window.gapi.load('client:auth2',()=> {
window.gapi.client.init({ 
clientId:'804267482082-d6nsm6snr43b6v7be897fdii1pht6uc6.apps.googleusercontent.com',
scope: 'email'
}).then (() =>{ 

this.auth= window.gapi.auth2.getAuthInstance() ;
this.onAuthChange(this.auth.isSignedIn.get())
this.auth.isSignedIn.listen(this.onAuthChange);
});

 });
}

onAuthChange =(isSignedIn) => { 
if(isSignedIn===true) { 
    this.props.signIn(this.auth.currentUser.get().getId());
} else { 
    this.props.signOut();
}



};

SignInClick = () => { 
 this.auth.signIn();
console.log('sign in')
console.log(window.gapi)
};

SignOutClick = () => { 
    this.auth.signOut();
    console.log('sign out')

};

renderAuthButton() { 
if(this.props.isSignedIn===null) { 
    return < div> dont know if signed in</div>;
} else if (this.props.isSignedIn) { 
    return ( 
      <button  onClick={ this.SignOutClick} className ="ui red google button">
          <i className = "google icon" />
          sign out
           </button>
    )
} else { 
    return  ( <button onClick={this.SignInClick} className ="ui green google button">
    <i className = "google icon" />
    sign in
     </button>
    )
    }

}
render() { 

return ( 
<div> 
{this.renderAuthButton()}
</div>

        )
    }
}




export default GoogleAuth;