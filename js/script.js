document.addEventListener('DOMContentLoaded', () =>{

  const url = `http://localhost:3000/films`
  
  //Delete existing <li> Movie titles will go here.</li>
  const rem = document.querySelector('li:first-child')
  rem.remove()
  
  const forPoster = document.getElementById('poster') // poster
  const theTitle = document.getElementById('title') // title
  const theRuntime = document.getElementById('runtime') // runtime 
  const thefilmInfo = document.getElementById('film-info') // film-info
  const theShowTime = document.getElementById('showtime') // showtime
  const ticketNo = document.getElementById('ticket-num') // ticket-num

  document.addEventListener('click',handleEvents)

  // a movie
  function renderAllMovies(movie){

  let movieList = document.createElement('li')
  movieList.className = "film item"
  movieList.innerHTML = `
  <div id = movieName data-id =${movie.id}>
  ${movie.title}
  </div>
  `
  document.querySelector('#films').appendChild(movieList)
  }
 
 
  
  //a list of all movies

  fetch(url)
  .then(res => res.json())
  .then(movies => movies.forEach(movie => renderAllMovies(movie)))
 
  //Click movie title to display movie data

  function handleEvents(e){
      e.preventDefault()
      if(e.target.id === 'movieName'){
          movieInfo(e.target.dataset.id)
      }
  }


  button.addEventListener('click', () => {
    if (remainingtickets > 0) {
      remainingtickets--;
      availabletickets.innerText = `Available Tickets: ${remainingtickets}`;
    } else {
      // No available tickets, so disable the button and set it to "Sold Out"
      button.disabled = true;
      button.innerText = 'Sold Out';
      button.style.backgroundColor = 'grey';
    }
  })

  //CLick Movie title to show details

  function movieInfo(id){
      fetch(url + `/${id}`)
      .then(res => res.json())
      .then(movie => {
          theTitle.innerHTML = movie.title
          forPoster.src = movie.poster
          theRuntime.innerHTML = movie.runtime + ' minutes'
          thefilmInfo.innerHTML = movie.description
          theShowTime.innerHTML = movie.showtime

          //Buy ticket button click 
          let availableTicket = (movie.capacity - movie.tickets_sold)
          ticketNo.innerHTML = availableTicket
          document.querySelector('#buy-ticket').addEventListener('click',() =>{
              
              if(availableTicket > 0){
                  ticketNo.innerHTML = --availableTicket
              }
              
          })
      })
  }

})
























// const listHolder = document.getElementById('films')
// document.addEventListener('DOMContentLoaded', ()=>{

//   const url = `http://localhost:3000/films`
//     document.getElementsByClassName('film item')[0].remove()
//     fetchMovies(url)


// //Create fetch function
// function fetchMovies(url){
//     fetch(url)
//     .then(response => response.json())
//     .then(movies => {
//         // movies.forEach(movie => {
//         //     displayMovie(movie)
//         // });
//     })
// }

// function displayMovie(movie){
   
//     const li = document.createElement('li')
//     li.style.cursor="pointer"
//     li.textContent= (movie.title).toUpperCase()
//     listHolder.appendChild(li)
//     addClickEvent()
// }
// function addClickEvent(){
//     let children=listHolder.children
//     // console.log(children)

//     for(let i=0; i<children.length; i++){
//         let child=children[i]
//         // console.log(child)

//         child.addEventListener('click',() => {
//             fetch(`${url}/${i+0}`)

//             .then(res => res.json())
//             .then(movie => {
//                 document.getElementById('buy-ticket').textContent = 'Buy Ticket'
//                 setUpMovieDetails(movie)
//             })

//         })
//     }
// }
// function setUpMovieDetails(childMovie){
//     const preview = document.getElementById('poster')
//     preview.src = childMovie.poster;

//     const movieTitle = document.querySelector('#title');
//     movieTitle.textContent = childMovie.title;
//     const movieTime = document.querySelector('#runtime');
//     movieTime.textContent = `${childMovie.runtime} minutes`;
//     const movieDescription = document.querySelector('#film-info');
//     movieDescription.textContent = childMovie.description;
//     const showTime = document.querySelector('#showtime')
//     showTime.textContent = childMovie.showtime;
//     const tickets  = document.querySelector('#ticket-num')
//     tickets.textContent = childMovie.capacity -childMovie.tickets_sold;
// }
// const btn = document.getElementById('buy-ticket')

//         btn.addEventListener('click', function(e){
//             let remTickets = document.querySelector('#ticket-num').textContent
//             e.preventDefault()
//             if(remTickets > 0){
//                 document.querySelector('#ticket-num').textContent  = remTickets-1
                
//             }
//             else if(parseInt(remTickets, 10)===0){
//                 btn.textContent = 'Sold Out'
//             }
//     })

//   })




































// ...

// Function to send a PATCH request to update a movie's details
// function updateFilm(filmId, updatedData) {
//   fetch(`http://localhost:3000/films/${filmId}`, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(updatedData),
//   })
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error('Failed to update movie details');
//       }
//       return res.json();
//     })
//     .then((updatedMovie) => {
//       // Assuming you want to update the movie details in the UI as well
//       const card = document.getElementById(filmId); // Assuming you set a unique ID for each card
//       if (card) {
//         const movietitle = card.querySelector('#title');
//         const movieposter = card.querySelector('#poster');

//         // Update the UI with the updated movie details
//         movietitle.innerText = updatedMovie.title;
//         movieposter.src = updatedMovie.poster;
//       }
//     })
//     .catch((error) => console.log('Error updating movie details: ', error));
// }

// // ...

// // Inside your 'card' creation loop, add a patch button and event listener
// const patchButton = document.createElement('button');
// patchButton.innerText = 'Update';
// patchButton.classList.add('btn');
// card.appendChild(patchButton);

// patchButton.addEventListener('click', () => {
//   const updatedData = {
//     title: 'Updated Title',
//     poster: 'Updated Poster.jpg',
//     // Add any other properties you want to update here
//   };

//   const filmId = film.id; // Assuming you have an 'id' property in your movie data

//   updateFilm(filmId, updatedData);
// });





















































// const moviecontainer = document.getElementById('moviecontainer')

// document.getElementById('form').addEventListener('submit', (e) => {
// e.preventDefault();
// let filmObj = {
//   title: e.target.title.value,
//   runtime: e.target.runtime.value,
//   capacity: e.target.capacity.value,
//   showtime: e.target.showtime.value,
//   tickets_sold:20,
//   description: e.target.description.value,
//   poster: e.target.poster.value
// };
// postFilm(filmObj)
// })

// //fetch movie details from json server

// fetch('http://localhost:3000/films')
// .then(res => {
//     if(!res.ok){
//         console.log('not okay')
//     }
//     return res.json()
// })
//  .then(data => {
   
//    //create an array of specific movie title i want to style
//     const findtitles = ['Time Chasers', 'The Skydivers', 'The Killer Shrews','Wild Rebels','Danger: Diabolik','Catalina Caper','Village Of The Giants','The Touch Of Satan','Project Moon Base','Prison break','money heist'];

//     //map through each array element

//     data.map (film => {
//         const card = document.createElement('div')
//         card.classList.add('card')

//         const poster =document.createElement('img')
//         poster.src = film.poster
//         poster.id = 'poster'
//         card.appendChild(poster)

//         const title = document.createElement('p')
//         title.innerText = film.title
//           if ( findtitles.includes(film.title)){
//             title.classList.add('titles')
//           }
//           title.id ='title'
//         card.appendChild(title)

//         const runtime = document.createElement('p')
//          runtime.innerText = `Runtime: ${film.runtime}`
//          runtime.classList.add('p1')
//          card.appendChild(runtime)

//          const showtime = document.createElement('p')
//           showtime.innerText = film.showtime
//           showtime.classList.add('show-times');
//           card.append(showtime)

//           let  capacity = film.capacity
//           let ticketsold = film.tickets_sold
//           let remainingtickets = capacity - ticketsold

//           const availabletickets = document.createElement('p')
//           availabletickets.innerText = `Available Tickets: ${remainingtickets}`;
//           availabletickets.classList.add('tickets')
//           card.appendChild(availabletickets)

        

//           const button = document.createElement('button')
//            button.innerText = 'Buy'
//            button.classList.add('btn')
//            card.appendChild(button);
          
//            button.addEventListener('click', () => {
//                if(remainingtickets > 0){
//                 remainingtickets--
//                 availabletickets.innerText = `Available Tickets: ${remainingtickets}`;
//                }
//                else{
                    
//                     button.disabled = true
//                     button.innerText ='SoldOut'
//                     button.style.backgroundColor = 'grey'
                    
//                }
              

//            })
          
//            //add an event listener to card
//            card.addEventListener ('click', (e) => {
//             fetch(`http://localhost:3000/films?title=${encodeURIComponent(title)}&poster=${encodeURIComponent(poster)}`)
//             .then (res => {
//               if(!res.ok){
//                 throw new Error('Failed')
//               } 
//               return res.json()
//             })
//             .then(moviedata => {
//               newdetails(card)

//             })
//            })

//         moviecontainer.appendChild(card)
//     })
   

       
//  })
      

// .catch(error => console.log('error'))

//    //function that replaced the current details
//   function newdetails(card){

//     //get the current details
//       const movietitle = card.querySelector('#title')
//       movietitle.classList.add('moviettl')  
//       const movieposter = card.querySelector('#poster')

//       //new details

//       movietitle.innerText = 'Batman'     
//       movieposter.src = 'Batman.jpg'
//   }
// function postFilm(filmObj){
//     fetch('http://localhost:3000/films' ,{
//       method:'POST',
//       headers:{
//         'Content-Type':'application/json'
//       },
//       body: JSON.stringify (filmObj)
//     })
//     .then(res => res.json())
//     .then(datas => console.log(datas));
//   }
 
       


 