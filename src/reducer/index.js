import {INCREMENT, DECREMENT} from './../actions/actionTypes';

// Redux Reducer with signature (state, action) => state
const myReducer = (myState, myAction) => {
  switch(myAction.type){
    case INCREMENT: return { count: myState.count + 1 }
    case DECREMENT : return { count: myState.count - 1 }
    default: return myState
  }
}
 
export default myReducer;