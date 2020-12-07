"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Start
// Get element by Tag
var eTag = _toConsumableArray(document.getElementsByTagName("section")); // Get all pro elements


var pro = document.getElementsByClassName("pro"); // Get reset element by id

var reset = _toConsumableArray(document.getElementsByClassName("reset")); // Get Year elements by id


var yearPro = _toConsumableArray(document.getElementsByClassName("year")); // Functions
// -----------------------------------------------------------------
// Event listeners 


document.addEventListener("DOMContentLoaded", function () {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("content").innerHTML = this.responseText;
    }
  };

  var a = "php/year_2020.php?t=";
  xmlhttp.open("GET", a + Math.random, true);
  xmlhttp.send();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = yearPro[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if (item.innerText === "2020") {
        item.classList.add("selected");
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}); //class="year"

document.addEventListener("click", function (e) {
  var target = e.target;
  var text = target.innerText; // 2020
  // Toggle year buttons

  if (target.className === "year") {
    target.classList.add("selected");
    yearPro.forEach(function (e) {
      if (text !== e.innerText) {
        e.classList.remove('selected');
      }
    });
    var xmlhttp = new XMLHttpRequest();

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
      e.classList.add('selected');
    });

    var _xmlhttp = new XMLHttpRequest();

    _xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("content").innerHTML = this.responseText;
      }
    };

    var _a = "php/year_all.php?t=";

    _xmlhttp.open("GET", _a + Math.random, true);

    _xmlhttp.send(); // Close button evenet listener

  } else if (target.className === "reset") {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = pro[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var item = _step2.value;
        item.classList.add("display-none");
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = yearPro[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var item1 = _step3.value;
        item1.classList.remove("selected");
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
          _iterator3["return"]();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }
  } else {// Error
  }
});