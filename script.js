const container = document.querySelector(".container");
const seats = document.querySelectorAll("row .seats:not(.occupied)");

const count=document.querySelector(".count")
const total=document.querySelector(".total")

const movieSelect=document.querySelector("#movie")
let ticketPrice=+movieSelect.value;
// update count and total

const updateSelectedCount=() =>{
    const selectedSeats=document.querySelectorAll(".row .seat.selected")
    const selectedSeatsCount=selectedSeats.length
    count.innerText=selectedSeatsCount
    total.innerText=ticketPrice * selectedSeatsCount
}
// movie select event
movieSelect.addEventListener("change", e =>{
    ticketPrice=+e.target.value;
    updateSelectedCount()
})


// seat select event
container.addEventListener("click" ,(e) =>{
    if(e.target.classList.contains("seat") && !e.target.classList.contains("occupied")){
        e.target.classList.toggle("selected")
    }
    updateSelectedCount()
})
