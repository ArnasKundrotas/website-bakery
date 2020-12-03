"use strict";

// Start
var pro2020 = document.getElementsByClassName("pro-2020");
var pro2019 = document.getElementsByClassName("pro-2019");
var pro2018 = document.getElementsByClassName("pro-2018");
var pro2017 = document.getElementsByClassName("pro-2017");
var pro2016 = document.getElementsByClassName("pro-2016");
var pro2015 = document.getElementsByClassName("pro-2015"); // Toggle To show info according to Year

function hideProAll(input) {
  var a = "pro" + input;
  var b = eval(a);
  Array.from(b).forEach(function (e) {
    e.classList.toggle('display-none');
  });
}

function addSelectedClass(input) {
  var a = "pro" + input + " selected";
  console.log(a);
} // Fix JS


Array.from(pro2019).forEach(function (e) {
  e.classList.add('display-none');
});
Array.from(pro2019).forEach(function (e) {
  e.classList.add('display-none');
});
Array.from(pro2018).forEach(function (e) {
  e.classList.add('display-none');
});
Array.from(pro2017).forEach(function (e) {
  e.classList.add('display-none');
});
Array.from(pro2016).forEach(function (e) {
  e.classList.add('display-none');
});
Array.from(pro2015).forEach(function (e) {
  e.classList.add('display-none');
}); // Event listeners

document.addEventListener('click', function (e) {
  e = e || window.event;
  var target = e.target,
      text = target.textContent || target.innerText;
  hideProAll(text);
  e.target.classList.toggle('selected');
}, false); // End