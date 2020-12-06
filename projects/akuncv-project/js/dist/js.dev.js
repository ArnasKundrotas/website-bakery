"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Start
// Get element by Tag
var eTag = _toConsumableArray(document.getElementsByTagName("section")); // Get all pro elements


var pro = _toConsumableArray(document.getElementsByClassName("pro")); // Get reset element by id


var reset = _toConsumableArray(document.getElementsByClassName("reset")); // Get Year elements by id


var yearPro = _toConsumableArray(document.getElementsByClassName("year")); // Functions
// -----------------------------------------------------------------
// Event listeners 
//class="year"


document.addEventListener("click", function (e) {
  var target = e.target;
  var text = target.innerText; // Toggle year buttons

  if (target.className !== "reset" && target.className !== "no-reset") {
    target.classList.toggle("selected");

    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("content").innerHTML = this.responseText;
      }
    };

    var a = "php/year_".concat(text, ".php?t=");
    xmlhttp.open("GET", a + Math.random, true);
    xmlhttp.send(); // Check button event listener
  } else if (target.className === "no-reset") {
    yearPro.forEach(function (e) {
      e.classList.add("selected");
    });
    pro.forEach(function (e) {
      e.classList.remove("display-none");
    }); // Close button evenet listener
  } else if (target.className === "reset") {
    yearPro.forEach(function (e) {
      e.classList.remove("selected");
    });
    pro.forEach(function (e) {
      e.classList.add("display-none");
    }); // Error
  } else {
    alert('Failure');
  }
});