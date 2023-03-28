import status from './status';
import sort from './sort';
import  rememberLogin  from './rememberLogin';
import user from './user';
import savePlan from './savePlan';
import saveSpendTracking from './saveSpendTracking';

import { combineReducers } from 'redux';



const myReducer = combineReducers({
   
    status : status,
    sort : sort,
    rememberLogin,
    user,
    savePlan,
    saveSpendTracking,
})

export default myReducer;