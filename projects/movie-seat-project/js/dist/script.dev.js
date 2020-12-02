"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var container = document.querySelector('.container');
var seats = document.querySelectorAll('.row .seat:not(.occupied)');
var seatsOccupied = document.querySelectorAll('.seat.occupied');
var count = document.getElementById('count');
var total = document.getElementById('total');
var movieSelect = document.getElementById('movie');
var erase = document.querySelector('.erase');
populateUI();
var ticketPrice = +movieSelect.value;

function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

function updateSelectedCount() {
  var selectedSeats = document.querySelectorAll('.row .seat.selected');

  var seatsIndex = _toConsumableArray(selectedSeats).map(function (seat) {
    return _toConsumableArray(seats).indexOf(seat);
  });

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
  var selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

function populateUI() {
  var selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach(function (seat, index) {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }
}

movieSelect.addEventListener('change', function (e) {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});
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
updateSelectedCount();