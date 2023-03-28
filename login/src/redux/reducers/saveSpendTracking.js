
import { initAction } from '../../router/userRoter';

var l =[] ;
var initalState = initAction({ user_id: 0,startDate: 0, endDate: Date() }).then(s=> l.push(s));

var myReducer = (state = l, action) => {
    console.log("my1");
    console.log(action)
    if(action.type == 'SAVESPENDTRACKING') 
    {
            console.log("my2");
                var {saveSpendTracking} = action;
                return { saveSpendTracking};
    }
  
    return state;
}



export default myReducer;