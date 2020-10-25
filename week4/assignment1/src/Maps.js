import React from 'react'
import Axios from 'axios'

const  deleteItem = (e) => {
    Axios.delete(`https://api.vschool.io/james/todo/${e.target.id}`)
    .then(res => console.log(res) )
    .catch(err => console.log(err))

}


const update = (e)  =>{
    console.dir(e.target)
    let updateTodo = {completed: e.target.checked}
    console.log(e.target.checked)
    console.log(updateTodo)
    Axios.put(`https://api.vschool.io/james/todo/${e.target.id}`,updateTodo)
    .then(res => console.log(res))
    .catch(err => console.error(err))
    
}
function Maps(props) {
    return(
        <ul className= "box">
            <div>
                <h6 className="check1">Completed:
            <input className="check" id={props.id} onChange={update} type="checkbox" checked={props.checked}/>
                    </h6>
                <button id={props.id} onClick={deleteItem}>Delete</button>
            </div>

            <li className="el1">Title: {props.title}</li>
            <li className="el2">Description: {props.description}</li>
            <li className="el3">Price: {props.price}</li>
        </ul>
    )
}

export default Maps