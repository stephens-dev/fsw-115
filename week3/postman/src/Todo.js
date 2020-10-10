// import React from 'react'
// const { renderIntoDocument } = require("react-dom/test-utils")

import Axios from "axios"
// import React from 'react'


const Todo = () => {
    Axios.get('https://api.vschool.io/james/todo/')
    .then(res =>{
        console.log(res.data)
    })
    .catch(err => console.error(err))
}

const getTodo = () => {
    Axios.get('https://api.vschool.io/james/todo/5f81fe5da269067180b0f2b6')
    .then(res => {
        console.log(res.data)
    })
    .catch(err => console.error(err))
}

const deleteTodo = () => {
    Axios.delete('https://api.vschool.io/james/todo/5f81fe5da269067180b0f2b6')

}
const putTodo = () => {
    Axios.put('https://api.vschool.io/james/todo/5f81fe8ea269067180b0f2b8',{"completed": false})

}
export {Todo, getTodo, deleteTodo, putTodo }
