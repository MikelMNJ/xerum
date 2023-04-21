import { combineReducers } from '@reduxjs/toolkit';
import { reducers } from 'controllers/reducersController';
import { rootConstants } from 'modules';

const { actions } = rootConstants;

const mainReducer = combineReducers(reducers);

const rootReducer = (state = {}, action = {}) => {
  switch(action.type) {
    case actions.LOG_OUT:
      return mainReducer(undefined, action);

    default:
      return mainReducer(state, action);
  }
};

export { rootReducer };