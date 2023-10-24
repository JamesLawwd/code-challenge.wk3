document.addEventListener('DOMContentLoaded', () => {
  const url = 'http://localhost:3000/films';

  // DOM elements
  const filmsList = document.querySelector('#films');
  const titleElement = document.getElementById('title');
  const posterElement = document.getElementById('poster');
  const runtimeElement = document.getElementById('runtime');
  const filmInfoElement = document.getElementById('film-info');
  const showtimeElement = document.getElementById('showtime');
  const ticketNumElement = document.getElementById('ticket-num');
  const availableTicketsElement = document.getElementById('available-tickets');

  const button = document.getElementById('buy-ticket');
  let remainingTickets = 0;

  // Click Movie title to show details
  filmsList.addEventListener('click', (event) => {
    if (event.target.classList.contains('film-item')) {
      const movieId = event.target.dataset.id;
      fetchMovieInfo(movieId);
    }
  });

  button.addEventListener('click', () => {
    if (remainingTickets > 0) {
      remainingTickets--;
      availableTicketsElement.textContent = `Available Tickets: ${remainingTickets}`;
    } else {
      button.disabled = true;
      button.textContent = 'Sold Out';
      button.style.backgroundColor = 'grey';
    }
  });

  function renderMovieListItem(movie) {
    const movieItem = document.createElement('li');
    movieItem.classList.add('film-item');
    movieItem.dataset.id = movie.id;
    movieItem.textContent = movie.title;
    filmsList.appendChild(movieItem);
  }

  function fetchMovieInfo(movieId) {
    fetch(`${url}/${movieId}`)
      .then((res) => res.json())
      .then((movie) => {
        titleElement.textContent = movie.title;
        posterElement.src = movie.poster;
        runtimeElement.textContent = `${movie.runtime} minutes`;
        filmInfoElement.textContent = movie.description;
        showtimeElement.textContent = movie.showtime;

        const availableTickets = movie.capacity - movie.tickets_sold;
        ticketNumElement.textContent = availableTickets;
        remainingTickets = availableTickets;
        availableTicketsElement.textContent = `Available Tickets: ${remainingTickets}`;
        button.disabled = false;
        button.textContent = 'Buy Ticket';
        button.style.backgroundColor = 'green';
      });
  }

  // Fetch and render all movies
  fetch(url)
    .then((res) => res.json())
    .then((movies) => movies.forEach((movie) => renderMovieListItem(movie)));
});
