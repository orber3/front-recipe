



const INITIAL_STATE = {
    isSignedIn: null
};

export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return { isSignedIn: true  , user: action.payload};
        case 'SIGN_OUT':
            return {...state, isSignedIn: false };
        default:
            return state;
    }
};