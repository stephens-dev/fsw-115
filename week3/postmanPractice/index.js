const getPlanets = () => {
    axios.get('https://swapi.dev/api/planets/')
    .then(res => {
        console.log(res.data)
    })
    .catch(err => console.error(err))
}

function renderPlanets(data){
    return(
<h1>{data}</h1>
    )
}