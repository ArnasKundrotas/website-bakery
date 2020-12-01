"use strict";

var container = document.querySelector('.container');
var seats = document.querySelectorAll('.row .seat:not(.occupied)');
var seatsOccupied = document.querySelectorAll('.seat.occupied');
var count = document.getElementById('count');
var total = document.getElementById('total');
var movieSelect = document.getElementById('movie');
var erase = document.querySelector('.erase');
var ticketPrice = +movieSelect.value;

function updateSelectedCount() {
  var selectedSeats = document.querySelectorAll('.row .seat.selected');
  var selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

container.addEventListener('click', function (e) {
  if (e.target.classList.contains && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
    updateSelectedCount();
  }
});
erase.addEventListener('click', function (e) {
  var seatsSelected = document.querySelectorAll('.container .seat.selected');
  seatsSelected.forEach(function (element) {
    return element.classList.remove('selected');
  });
  updateSelectedCount();
});