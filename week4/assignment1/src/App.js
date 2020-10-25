import React, { Component } from 'react';
// import {getTodo} from './Todo'
import './App.css';
// import { render } from '@testing-library/react';
import Axios from "axios"
import Maps from "./Maps"
import Post from "./Post"

class App extends Component {
  constructor() {
    super()
      this.state = { 
        list:[],
        title: "",
        description: "",
        price: ""
      }

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
      <Maps id={maps._id} checked={maps.completed}key={maps._id} title={maps.title} description={maps.description} price={maps.price}/>
       )
          
    handleChange = (event) =>
    this.setState({
      [event.target.name]: event.target.value
    })
    

   
  render() {
    return(
      <div className="main">
        <input name="title" type="text" placeholder="Title:" onChange={this.handleChange} />
           <input name="descriptoin" type="text" placeholder="Description:" onChange={this.handleChange} />
           <input name="price" type="text" placeholder="Price:" onChange={this.handleChange} />
           
            <button onClick={
              ()=>{
                Post({"title":this.state.title,
                "description":this.state.title,
                "price":this.state.price})}
                
                }>Add</button>
       
        <h1 className="head"> To Do List</h1>
        { this.maps()}

      </div>
    )
  }
}
export default App;
