const movieInput = document.getElementById("movieInput");
const addBtn = document.getElementById("addBtn");
const movielist = document.getElementById("movieList");

// Load movies when page opens
document.addEventListener("DOMContentLoaded", loadMovies);

// Add movie
addBtn.addEventListener("click", () => {
    const name = movieInput.ariaValueMax.trim();

    if (name === "") {
        alert("Please enter a movie name");
        return;
    }

    const movie = {
        name: name,
        watched: false
    };

    AddMovieToDOM(movie);
    saveMovie(movie);

    movieInput.value = "";
});

// Add movie to page
function AddMovieToDOM(movie) {
    const li = document.createElement("li");

    li.className = 
    "list-group-item d-flex align-items-center justify-content-between text-light fade-in " +(movie.watched ? "bg-secondary2" : "bg-secondary1");

    li.innerHTML = '
        <div class="d-flex align-items-center">
        <img src="https://placehold.jp/60x60.png" class="movie-img">
        <span>${movie.name}</span>
    </div> 

    <div>
        <button class="btn btn-success btn-sm me-2">Delete</button>
    </div>
    ';

movielist.appendChild(li);

// Delete
li.querySelector(".btn-danger").addEventListener("click", () => {
    li.remove();
    deleteMovie(movie.name);
});

// Toggle watched
const watchBtn = li.querySelector(".btn-success");

watchBtn.addEventListener("click", () => {
    movie.watched = !movie.watched;

    li.classList.toggle("bg-secondary2");
    li.classList.toggle("bg-secondary1");

    watchBtn.textContent = movie.watched ? "Unwatched" : "Watched";

    updateMovies();
});
}

// Save movie
function saveMovie(movie) {
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    movies.push(movie);
    localStorage.setItem("movies", JSON.stringify(movies));
}

// Load movies
function loadMovies() {
    let movies = JSON.parse(localStorage.getItem("movies")) ||[];
    movies.forEach(movie => AddMovieToDOM(movie));
}

// Delete movie
function deleteMovie(name) {
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    movies = movies.filter(movie => movie.name !== name);
    localStorage.setItem("movies", JSON.stringify(movies));
}

// Update all movies (for watched toggle)
function updateMovies() {
    let updateMovies = [];

    document.querySelectorAll("#movieList li").forEach(li => {
        const name = li.querySelector("span").textContent;
        const watched = li.classList.contains("bg-secondary2");

        updatedMovies.push({ name, watched });
    });

    localStorage.setItem("movies", JSON.stringify(updateMovies));
}