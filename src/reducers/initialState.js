import { ITEMS } from '../shared/items';

export const initialState = {
  items: ITEMS,
  loggedIn: {
    token: '',
    status: 'logged out',
  },
};