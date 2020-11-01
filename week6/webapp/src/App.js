import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import Axios from 'axios'
import Maps from './Maps'

class App extends Component {
  constructor() {
    super()
    this.state ={
      Ricks: [],
      Morty: [],
      Beth: []
    }
  }

  componentDidMount(){
    Axios.get('https://rickandmortyapi.com/api/character?name=Rick')
    .then(res => {
      this.setState({
        Ricks: res.data.results
      })
    }) 
    .catch(err => console.log(err))
    Axios.get('https://rickandmortyapi.com/api/character?name=Morty')
    .then(res =>{
      this.setState ({ Morty: res.data.results})})
      .catch(err => console.log(err))
      Axios.get('https://rickandmortyapi.com/api/character?name=Beth')
      .then(res => {
        this.setState({
          Beth: res.data.results
        })
      }) 
      .catch(err => console.log(err))

  }
   maps = () =>{
    //  console.log(this.state.Ricks)
   const mappedRicks = this.state.Ricks.map(maps =>{
        
     return <Maps key={maps.id} name={maps.name}/>
      
    })
    return mappedRicks
  }
  mortyMaps = () =>{
    //  console.log(this.state.Ricks)
   const mappedMorty = this.state.Morty.map(maps =>{
        
     return <Maps key={maps.id} name={maps.name}/>
      
    })
    return mappedMorty
  }
  bethMaps = () =>{
    //  console.log(this.state.Ricks)
   const mappedBeth = this.state.Beth.map(maps =>{
        
     return <Maps  key={maps.id} name={maps.name}/>
      
    })
    return mappedBeth
  }
render() {
 
  return(
    <div className="container">
      <div className="beth">
      { this.state.Ricks.length && this.maps()}
      </div>
      <div className="morty">
      {this.state.Morty.length && this.mortyMaps()}
      </div>
      <div className="rick">
      {this.state.Beth.length && this.bethMaps()}
      </div>
      

    </div>
  )
}
}
export default App;
