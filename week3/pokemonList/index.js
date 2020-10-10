const getPoke = () => {
    let xhr = new XMLHttpRequest()
    console.log(xhr)
    xhr.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200){
            let data = xhr.response
            renderPoke(data)
        }
    }
    xhr.open('GET', 'https://api.vschool.io/pokemon')
    xhr.send()
}

let list = document.getElementById("root")

 function renderPoke(data) {
     console.log(data)
    for (var i = 0; i < data.length; i++) {
        var newName = document.createElement("li")
        newName.textContent = data[i].name
        list.append(newName)
    }
}

