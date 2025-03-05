let title = document.querySelector('#movieTitle')
let publisher = document.querySelector('#moviePublisher')
let image = document.querySelector('#movieImage')
let addMovie = document.querySelector('#addMovie')
let clearMovie = document.querySelector('#clearmovie')

addMovie.addEventListener("click", addMovies);
function addMovies(){
    if (!title.value){
        alert('please enter your movie')
        return
    }
    else if(!publisher.value){
        alert('please enter your Publisher')
        return

    }
    else if(!image.value){
        alert('please enter your Image')
        return   
    }
    let movie = {
        title : title.value,
        publisher: publisher.value,
        image : image.value
    }
    console.log(movie);
    

    let movies = JSON.parse(localStorage.getItem('movies')) || []
   movies.push(movie)
    console.log(movies)
displayMove(movie)
    localStorage.setItem("movies",JSON.stringify(movies))
}
function displayMove(movie){
    let div = document.createElement('div')
    div.classList.add('movie-item')
    div.innerHTML=`  <img src="${movie.image}" alt="movie.cover" class="movie-image" width="100px">
    <div class="movie-details">
        <p class="movie.name">${movie.title}</p>
        <p class="movie.publisher">by ${movie.publisher}</p>
    </div>`

    document.getElementById('movielist').appendChild(div) 

}
let movies = JSON.parse(localStorage.getItem('movies'))

for (let index = 0; index < movies.length; index++) {
    const element = movies[index]; 
    displayMove(element)

    }