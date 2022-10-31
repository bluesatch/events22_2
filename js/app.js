/**
 * collect information
 * store info in an object
 * store objects in an array
 * make a card when we type in information
 * 
 * 
 * 
 * 
 * 
 */

const logo = document.getElementById('logo')
const submitBtn = document.getElementById('submitBtn')
const movieCards = document.getElementById('movieCards')
let movies = []

logo.innerText = "Satch's Spooky Movie Spectacular"

const collectData =()=> {
    // collect information

    const movieTitle = document.getElementById('movieTitle').value
    const releaseYear = document.getElementById('releaseYear').value
    const movieDuration = document.getElementById('movieDuration').value
    const movieGenre = document.querySelector('select[name=movieGenre]').value
    const movieDirector = document.getElementById('movieDirector').value
    const movieDescription = document.getElementById('movieDescription').value
    const movieImage = document.getElementById('movieImage').value


    let data = {
        movieTitle,
        releaseYear,
        movieDuration,
        movieGenre,
        movieDirector,
        movieDescription,
        movieImage
    }

    addData(data, movies)
}

const addData =(obj, arr)=> {
    arr = [...arr, obj]
    buildCard(arr)

}

const buildCard =(arr)=> {
    let card;

    arr.forEach(item => {
        card = `
        <div class="col-md-4">
        <div class="card">
            <div class="card-header">
                <h3 id="title" class="text-dark">${item.movieTitle}</h3>
            </div>
            <img src="${item.movieImage}" alt="${item.movieDescription}" class="img-fluid movie-img" />
            <div class="card-body">
                <p class="card-text text-dark" id="description">${item.movieDescription}</p>
                <p class="card-text text-dark">Director: <span id="director">${item.movieDirector}</span></p>
                <p class="card-text text-dark">Genre: <span id="genre">${item.movieGenre}</span></p>
            </div>
            <div class="card-footer">
                <p class="card-text text-dark" id="year">${item.releaseYear}</p>
                <p class="card-textb  text-dark"><span id="duration">${item.movieDuration}</span> minutes</p>
            </div>
        </div>
    </div>
        `
    })
    const movieCards = document.getElementById('movieCards')
    movieCards.innerHTML+= card

    // console.log(movies)
}

submitBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    collectData()
   

   

   

})