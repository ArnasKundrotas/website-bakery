"use strict";

function addTr() {
  var div = document.createElement('div');
  div.className = 'row';
  div.innerHTML = "\n      <input type=\"text\" name=\"name\" value=\"\" />\n      <input type=\"text\" name=\"value\" value=\"\" />\n      <label> \n        <input type=\"checkbox\" name=\"check\" value=\"1\" /> Checked? \n      </label>\n      <input type=\"button\" value=\"-\" onclick=\"removeRow(this)\" />\n    ";
  document.getElementById('content').appendChild(div);
}

function removeTr(input) {
  document.getElementById('content').removeChild(input.parentNode);
}