import React, { Component } from 'react';
import './App.css';

const Control = (props) => {
  return (
    <div>
    <button onClick={props.increase}> 
      Increase  
    </button>
    <button onClick={props.decrease}> 
      Decrease 
    </button>
    </div>
  );
};

const Display = (props) => (
  <h1>{props.count}</h1>
);

class App extends Component {
  constructor(){
    super();
    this.state = {
      counter: 0,
    }
    this.increaseClick = this.increaseClick.bind(this);
    this.decreaseClick = this.decreaseClick.bind(this);    
  }
  increaseClick(){
    this.setState(
      prevState => ( {counter:prevState.counter + 1} )
    );
    console.log('Increased!');
  };
  decreaseClick(){
    this.setState(
      prevState => ( {counter:prevState.counter - 1} )
    );
    console.log('Decreased!');
  };
  render() {
    return (
      <div className="App">
       <h1>Counter</h1>
       <Display count={this.state.counter} />
       <Control increase={this.increaseClick}
                decrease={this.decreaseClick} />
      </div>
    );
  }
}

export default App;
