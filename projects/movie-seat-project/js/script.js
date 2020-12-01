const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const seatsOccupied = document.querySelectorAll('.seat.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const erase = document.querySelector('.erase');

const ticketPrice = +movieSelect.value;

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const selectedSeatsCount = selectedSeats.length;


    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

container.addEventListener('click', (e) => {
    if(e.target.classList.contains && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
});

erase.addEventListener('click', (e) => {
    
        const seatsSelected = document.querySelectorAll('.container .seat.selected');
    
        seatsSelected.forEach(element => element.classList.remove('selected'));

        updateSelectedCount();
    
});