import actionTypes from '../actions/actionTypes';
import { LOGGED_IN, LOGGED_OUT } from './../statusTypes';
import initialState from './initialState';

export const userRole = (state = initialState, action) => {
  let newState;

  switch (action.type) {
  
    case actionTypes.LOGIN_SUCCESS:
      newState = {...state};
      newState.loggedIn.status = LOGGED_IN;
      return newState;
  
    case actionTypes.LOGOUT:
      newState = {...state};
      newState.loggedIn.status = LOGGED_OUT;
      return newState;
    
    case actionTypes.SAVE_TOKEN:
      newState = {...state};
      newState.loggedIn.token = action.token;
      return newState;
  
    default:
      return state;
  }
}