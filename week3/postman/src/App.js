import React from 'react';
// import logo from './logo.svg';
import './App.css';
import planets from './planets.json'
import Planet from './Planet'
import {Todo, getTodo, deleteTodo, putTodo} from './Todo' 

function App() {
    const Element = planets.map(element => {
      return <Planet key={element.diameter} name={element.name}/>
    })
  return (
    <div className="App">
      {Element}
      <button onClick={Todo}>Get Todo</button>
      <button onClick={getTodo}>Get Item Three</button>
      <button onClick={deleteTodo}>Delete Item Three</button>
      <button onClick={putTodo}>update </button>
    </div>
  );
}

export default App;
