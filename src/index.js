import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const myData = {
  Name: 'Ronald',
  LastName: 'Paredes'
}
localStorage.setItem('myLocalState', JSON.stringify(myData));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

console.table(JSON.parse(localStorage.getItem('myLocalState')));