import { createStore,combineReducers, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {loginReducer} from './Login/reducer';
// import {signUP_reducer} from './Register/reducer';

const rootReducer = combineReducers({
    
    login: loginReducer,
});


const composeEnhancers =
  typeof window === 'object' &&
  window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ ?   
    window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const middleware = [thunk]

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);
export const store = createStore(rootReducer, enhancer);