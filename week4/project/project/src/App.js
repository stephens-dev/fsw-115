import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Starwars from './Starwars'
import Maps from './Maps'
import Axios from "axios"

class App extends Component {
      constructor() {
        super()
            this.state = {
              luke:{results: []},
              pageNum: 1,
              ricks: {results: []}
            }
      }
        maps = () => {
        
          Axios.get('https://swapi.dev/api/people/')
          .then (res => {
              this.setState({luke: res.data})
          })
          .catch(err => console.error(err))
      
      }
      ricks = () => {
        Axios.get('https://rickandmortyapi.com/api/character?name=Rick')
          .then (res => {
              this.setState({ricks: res.data})
          })
          .catch(err => console.error(err))
      }
      
        
        
      render() {
        if (this.state.pageNum == 1) { 
        return(
          
          <div>
            <button onClick={() => this.setState({pageNum: 2})}>Page2</button>
              <button onClick={this.maps}>Get Star Wars People</button>
              {
        this.state.luke.results.map(maps =>
          <Maps key={maps.height} name={maps.name}/>)
        }          </div>
        )}else {return(<div>
          <button onClick={() => this.setState({pageNum: 1})}>Page1</button>
          <button onClick={this.ricks}>Get Ricks</button>
          {
        this.state.ricks.results.map(maps =>
          <Maps key={maps.id} name={maps.name}/>)
        }
        </div>)}
      }
}

export default App;
