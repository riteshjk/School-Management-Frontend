export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

//action creator
export const loginLoading = () => ({
    type: LOGIN_LOADING
});

export const loginSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload: payload
}); 

export const loginFailure = () => ({
    type: LOGIN_FAILURE
});




export const login =({name,email,password})=> (dispatch) => {
    
    dispatch(loginLoading())
    fetch('https://my-app-deep.herokuapp.com/login', {
        method: 'POST',
        body: JSON.stringify({name,email,password}),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(res => dispatch(loginSuccess({name,email,token:res.token})))
        .catch(err => dispatch(loginFailure(err)))
}