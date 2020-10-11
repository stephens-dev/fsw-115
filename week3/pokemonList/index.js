const getPoke = () => {
    let xhr = new XMLHttpRequest()
    console.log(xhr)
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200){
            const JSONdata = xhr.responseText
            let data = JSON.parse(JSONdata)
            renderPoke(data.objects[0])
        }
    }
    xhr.open('GET', 'https://api.vschool.io/pokemon',true)
    xhr.send()
}

let list = document.getElementById("root")

 function renderPoke(data) {
     console.log(data)
    for (var i = 0; i < data.pokemon.length; i++) {
        var newName = document.createElement("h1")
        newName.textContent = data.pokemon[i].name
        document.body.append(newName)
    }
}

