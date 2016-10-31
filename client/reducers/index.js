import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import process from './process';
import steps from './steps';
import currentStep from './currentstep';
import users from './users';

const rootReducer = combineReducers({process, steps, currentStep, users, routing: routerReducer})

export default rootReducer;
