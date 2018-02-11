import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import './App.css';
import * as actions from './actions';
import reducer from "./reducer";

// Redux initial State object
const initialState = {
  count: 0,
}

// Redux Store
let myStore = createStore(
  reducer,
  initialState,
  // Redux-devtools extention code:
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
 
// React-Redux map state to props
const mapStateToProps = (store) => {
  return { value: store.count }
};

// React-Redux map dispatch to props
const mapDispatchToProps = (dispatch) => {
  return { 
    increaseClicked: () => {
      dispatch(actions.increment())
    },
    decreaseClicked: () => {
      dispatch(actions.decrement())
    }
  }
};

const Display = ({value}) => (
  <h1>{value}</h1>
);

const Control = ({increaseClicked, decreaseClicked}) => {
  return (
    <div>
      <button onClick={increaseClicked}> 
        Increase  
      </button>
      <button onClick={decreaseClicked}> 
        Decrease 
      </button>
    </div>
  );
};

// React-redux connected Display component (state only, no dispatch)
const VisibleDisplay = connect(
  mapStateToProps
 )(Display);

// React-redux connected Control component (no state, dispatch only)
const WorkingControl = connect(
  null,
  mapDispatchToProps
)(Control);


const App = () => (
  <Provider store={myStore}>
    <div className="App">
      <h1>Counter</h1>
      <VisibleDisplay />
      <WorkingControl />
    </div>
  </Provider>
);

export default App;
