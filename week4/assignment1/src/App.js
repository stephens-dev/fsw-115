import React, { Component } from 'react';
// import {getTodo} from './Todo'
import './App.css';
// import { render } from '@testing-library/react';
import Axios from "axios"
import Maps from "./Maps"

class App extends Component {
  constructor() {
    super()
      this.state = { list:[]}

  }

  componentDidMount() {
      Axios.get('https://api.vschool.io/james/todo/')
      .then(res =>{
        this.setState({
          list: res.data
        })
       
      })
      .catch(err => console.error(err))
      
    }
    maps = () => 
       this.state.list.map(maps => 
      <Maps key={maps._id} title={maps.title} description={maps.description} price={maps.price}/>
       )
          
    
  render() {
    return(
      <div className="main">
        <h1 className="head"> To Do List</h1>
        { this.maps()}
    
      </div>
    )
  }
}
export default App;
