const selectedMovie = document.querySelector("#movie");
let ticketPrice = +selectedMovie.value;

const seats = document.querySelectorAll(".row .seat:not(.occupied)");

const count = document.querySelector(".count");

const total = document.querySelector(".total");

const container = document.querySelector(".container ");

populateUi();
// set movie index and price
function movieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

// update count and total

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const seatIndex = [...selectedSeats].map((seat) => {
    return [...seats].indexOf(seat);
  });
  localStorage.setItem("selectedSeats", JSON.stringify(seatIndex));

  count.innerText = selectedSeats.length;
  total.innerText = selectedSeats.length * ticketPrice;
}
// populate ui with localstorage

function populateUi() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }
  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedMovieIndex !== null) {
    selectedMovie.selectedIndex = selectedMovieIndex;
    ticketPrice = +selectedMovie.value;
    updateSelectedCount();
  }
}

// update selected movie
selectedMovie.addEventListener("change", (e) => {
  movieData(e.target.selectedIndex, e.target.value);

  ticketPrice = +e.target.value;
  updateSelectedCount();
});

//
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});


