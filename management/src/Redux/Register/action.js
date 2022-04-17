
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const SIGNUP_LOADING = 'SIGNUP_LOADING';

export const signUP_success = (payload) =>{
    return {
        type: SIGNUP_SUCCESS,
        payload: payload
    }
}

export const signUP_error = () =>{
    return {
        type: SIGNUP_ERROR,
    }
}
 export const signUP_loading = () =>{
    return {
        type: SIGNUP_LOADING,
    }
}

export const register = ({name,email,password}) => (dispatch) =>{

    dispatch(signUP_loading())
    fetch(`https://schooldata1.herokuapp.com/register`,{
          method:'POST',
          body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            },        
    }).then(res=>res.json())
    .then((res)=>dispatch(signUP_success({name,token:res.token})))
    .catch((err)=>dispatch(signUP_error()))
    };



