import Axios from "axios"

function Starwars() {
    Axios.get('https://swapi.dev/api/people/1/')
    .then (res => {
        this.setState({luke: res.data})
    })
    .catch(err => console.error(err))
}

export default Starwars