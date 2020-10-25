import Axios from 'axios'
// import React from 'react'

const Post = (state) => {
    return(
        Axios.post("https://api.vschool.io/james/todo/",state)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
        
    )

}



export default Post