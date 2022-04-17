import {SIGNUP_SUCCESS,SIGNUP_ERROR,SIGNUP_LOADING} from "./action";


const initialState ={
    signUpLoading: false,
    signUP_error:false,
    isSignUp: false,
    token: ""
}


export const signUP_reducer = (store = initialState, {type,payload}) => {
    switch(type){
        case SIGNUP_SUCCESS:
            return{
                ...store, token: payload, isSignUp: true, signUpLoading: false, signUP_error: false
            }
        case SIGNUP_ERROR:
            return {
                ...store,  isSignUp: false, signUpLoading: false, signUP_error: true
            }
        case SIGNUP_LOADING:
            return {
                ...store, signUpLoading: true
            }
        default : return store    
    }
}