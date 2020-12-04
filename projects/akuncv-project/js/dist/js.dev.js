"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Start
// Get all pro elements
var pro = _toConsumableArray(document.getElementsByClassName("pro")); // Get reset element by id


var reset = _toConsumableArray(document.getElementsByClassName("reset")); // Get Year elements by id


var yearPro = _toConsumableArray(document.getElementsByClassName("year"));

pro.forEach(function (e) {
  var array = ["2020", "2019", "2018", "2017", "2016", "2015"];

  for (i = 0; i < pro.length; i++) {
    if (e.innerHTML.indexOf(array[i]) !== -1) {
      e.classList.add("display-none");
    }

    ;
  }
}); // Event listeners 
//class="year"

document.addEventListener("click", function (e) {
  var target = e.target;
  var text = target.innerText;

  if (target.className !== "reset" && target.className !== "no-reset") {
    target.classList.toggle("selected");
    pro.forEach(function (e) {
      if (e.innerHTML.indexOf(text) !== -1) {
        e.classList.toggle("display-none");
      }

      ;
    });
  } else if (target.className === "no-reset") {
    yearPro.forEach(function (e) {
      e.classList.add("selected");
    });
    pro.forEach(function (e) {
      e.classList.remove("display-none");
    });
  } else if (target.className === "reset") {
    yearPro.forEach(function (e) {
      e.classList.remove("selected");
    });
    pro.forEach(function (e) {
      e.classList.add("display-none");
    });
  } else {
    alert('Failure');
  }
});