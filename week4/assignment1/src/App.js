
import React, { Component } from 'react';
// import {getTodo} from './Todo'
import './App.css';
// import { render } from '@testing-library/react';
import Axios from "axios"
import Maps from "./Maps"
import Post from "./Post"
import Movie from './Movie'

class App extends Component {
  constructor() {
    super()
      this.state = { 
        list:[],
        title: "",
        description: "",
        price: "",
        movies: [],
        toDo: []
      }

  }


  componentDidMount() {

      this.combine()
    }
    combine = async() => {
      
      await this.getTodo()
      await this.getRick()
      this.agrigateData()
    }
     
    getTodo = () => {
     return Axios.get('https://api.vschool.io/james/todo/')
      .then(res =>{
        this.setState({
          toDo: res.data
          
        })
      })
      .catch(err => console.error(err))
    }
    getRick = () => {
     return Axios.get("https://rickandmortyapi.com/api/episode")
      .then(res => {
        this.setState({
          movies: res.data.results
        })
        
          
        
      })
      .catch(error => console.log(error))
    }
      
    agrigateData = () => {
      for (let i = 0; i < this.state.toDo.length; i++ ) {
        let newData = this.state.toDo[i]
        newData.episode = this.state.movies[i].name
        console.log(newData)
        this.setState({
          list: [...this.state.list,newData]
        })
      }
      console.log(this.state.toDo)
      console.log(this.state.movies)
     console.log( this.state.list)
  }
  //    Movie = () => {
  //     return(
  //         Axios.get("https://rickandmortyapi.com/api/episode")
  //         .then(res => {
  //           this.setState({movies: res.data.results})
  //         } )
  //         .catch(error => console.log(error))
          
  //     )
  
  // }
  
  

    maps = () => 
       this.state.list.map(maps => 
      <Maps id={maps._id} checked={maps.completed}key={maps._id} title={maps.title} description={maps.description} price={maps.price} episode={maps.episode}/>
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
           {/* <input name="price" type="text" placeholder="Price:" onChange={this.handleChange} /> */}
           
            <button onClick={
              ()=>{
                Post({"title":this.state.title,
                "description":this.state.title
                // "price":this.state.price
              })}
                
                }>Add</button>
       
        <h1 className="head"> To Do List</h1>
        { this.maps()}
        

      </div>
    )
  }
}
export default App;
