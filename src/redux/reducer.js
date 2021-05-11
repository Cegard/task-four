import { ITEMS } from '../shared/items';

export const initialState = {
  items: ITEMS,
  loggedIn: false
};

export const Reducer = (state = initialState, action) => {
  return state;
}