//movie data
const movies = [
    {
        title: "Kraven The Hunter",
        year: 2024,
        genre: "Action/Sci-fi",
        time: "2hr 7 min",
        image: "https://media.themoviedb.org/t/p/w300_and_h450_face/1GvBhRxY6MELDfxFrete6BNhBB5.jpg"
    },

    {
        title: "Ocean's 8",
        year: 2018,
        genre: "Crime/Comedy",
        time: "1hr 50min",
        image: "https://media.themoviedb.org/t/p/w300_and_h450_face/MvYpKlpFukTivnlBhizGbkAe3v.jpg"
    },

    {
        title:"Avengers: Endgame", 
        year: 2019,
        genre: "Action/Sci-fi",
        time: "3hr 1min",
        image: "https://media.themoviedb.org/t/p/w300_and_h450_face/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg"
    },

    {
        title: "The Texas Chainsaw Massacre",
        year: 1974,
        genre: "Horror",
        time: "1hr 23min",
        image: "https://media.themoviedb.org/t/p/w300_and_h450_face/mpgkRPH1GNkMCgdPk2OMyHzAks7.jpg"
    },

    {
        title: "The Bad Guys",
        year: 2022,
        genre: "comedy",
        time: "1hr 40min",
        image: "https://media.themoviedb.org/t/p/w300_and_h450_face/7qop80YfuO0BwJa1uXk1DXUUEwv.jpg"
    },

    {
        title: "The Amazing Spiderman",
        year: 2012,
        genre: "Action/Sci-fi",
        time: "2hr 16min",
        image: "https://media.themoviedb.org/t/p/w300_and_h450_face/jexoNYnPd6vVrmygwF6QZmWPFdu.jpg"
    }
];

const container = document.getElementById("movieContainer");

//movie display
function displayMovies(moviesList) {
    container.innerHTML = "";
    moviesList.forEach(movie => {
     const card = document.createElement("div")
     card.className = "col-md-4"
     card.innerHTML = `
      <div class="card h-100 shadow bg-dark text-white">
        <img src="${movie.image}" class="card-img-top" alt="${movie.title}">
        <div class="card-body">
          <h5 class="card-title">${movie.title}</h5>
          <p class="card-text">
            Year: ${movie.year}<br>
            Genre: ${movie.genre}<br>
            Time: ${movie.time}
          </p>
          <button class="btn btn-danger watchlist-btn">
            Add to Watchlist
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
      });
      addToWatchlist();
    }

    //add to watchlist
function addToWatchlist() {
     document.querySelectorAll(".watchlist-btn").forEach(button => {
    button.addEventListener("click", function () {
      if (this.classList.contains("added")) {
        this.classList.remove("added");
        this.textContent = "Add to Watchlist";
        this.classList.remove("btn-success");
        this.classList.add("btn-danger");
      } else {
        this.classList.add("added");
        this.textContent = "Added";
        this.classList.remove("btn-danger");
        this.classList.add("btn-success");
      }
    });
  });
}

displayMovies(movies)

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const searchValue = document.querySelector("input").value.toLowerCase();

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchValue)
  );

  displayMovies(filteredMovies);
});