ocument.addEventListener("DOMContentLoaded", () => {
  const moviePoster = document.getElementById("movie-poster");
  const movieTitle = document.getElementById("movie-title");
  const movieRuntime = document.getElementById("movie-runtime");
  const movieShowtime = document.getElementById("movie-showtime");
  const availableTickets = document.getElementById("available-tickets");
  const filmsList = document.getElementById("films");
  const buyTicketBtn = document.getElementById("buy-ticket-btn");

  // Function to fetch and display movie details
  function loadMovieDetails(movieId) {
      fetch(`/films/${movieId}`)
          .then(response => response.json())
          .then(data => {
              moviePoster.src = data.poster;
              movieTitle.textContent = data.title;
              movieRuntime.textContent = data.runtime;
              movieShowtime.textContent = data.showtime;
              const availableTicketsCount = data.capacity - data.tickets_sold;
              availableTickets.textContent = availableTicketsCount;
              
              // Add click event to buy ticket button
              buyTicketBtn.onclick = function() {
                  if (availableTicketsCount > 0) {
                      availableTickets.textContent = availableTicketsCount - 1;
                  } else {
                      alert("Tickets are sold out for this show.");
                  }
              };
          })
          .catch(error => console.error(error));
  }

  // Function to populate the list of movies
  function loadMoviesList() {
      fetch("/films")
          .then(response => response.json())
          .then(data => {
              data.forEach(movie => {
                  const listItem = document.createElement("li");
                  listItem.textContent = movie.title;
                  listItem.addEventListener("click", () => loadMovieDetails(movie.id));
                  filmsList.appendChild(listItem);
              });
          })
          .catch(error => console.error(error));
  }

  // Load movies list on page load
  loadMoviesList();
});