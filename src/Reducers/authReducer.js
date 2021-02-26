
import { USER_LOGIN_REQUEST,USER_LOGIN_FAIL,USER_LOGIN_LOGOUT,USER_LOGIN_SUCCESS } from '../Constants/userConstants'





const INITIAL_STATE = {
    isSignedIn: null
};

export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case USER_LOGIN_REQUEST:
        return { loading: true , ...state }
        
        case USER_LOGIN_SUCCESS:
        return { loading: false , success: true , isSignedIn: true  , user: action.payload }
    
        case USER_LOGIN_FAIL:
        return { loading: false , error: action.payload }
    
        case USER_LOGIN_LOGOUT:
            return {...state, isSignedIn: false , user: {}  };


        default:
            return state;
    }
};