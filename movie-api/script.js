
let img = document.querySelector('#image')
var url = 'https://www.omdbapi.com/?i=tt3896198&apikey=40481f2e'

fetch(url)
.then((response)=>{
    return response.json()
})
.then((data)=>{
    img.src = data.Poster
    console.log(data)
})
.catch((error)=>{
    console.log(error)
});


