import Axios from 'axios'
// import React from 'react'

const Movie = (state) => {
    return(
        Axios.post("https://rickandmortyapi.com/api/episode",state)
        .then(response => response.data)
        .catch(error => console.log(error))
        
    )

}



export default Movie