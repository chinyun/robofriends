import { CHANGE_SEARCH_FIELD } from './constants.js';

const initialState = {
  searchField: ''
}

// should be a pure funcion
export const searchRobots = (state = initialState, action = {}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.playload });
    default:
      return state;
  }
}