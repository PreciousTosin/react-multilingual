import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import actionTypes from './action-types';
import api from './api';

const initialState = {
  content: api.getContent(), // Loads default language content (en) as an initial state
};

const reducer = function reduce(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SWITCH_LANGUAGE:
      return {
        content: api.getContent(action.language),
      };
    default:
      return state;
  }
};

// export default reducer;

export default combineReducers({
  router: routerReducer,
  content: reducer,
});
