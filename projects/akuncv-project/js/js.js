// Start

// Get element by Tag
const eTag = [...document.getElementsByTagName("section")];
// Get all pro elements
const pro = [...document.getElementsByClassName("pro")];
// Get reset element by id
const reset = [...document.getElementsByClassName("reset")];
// Get Year elements by id
const yearPro = [...document.getElementsByClassName("year")];

// Functions


// -----------------------------------------------------------------

// Event listeners 

//class="year"

document.addEventListener("click", function(e) {
    let target = e.target;
    let text = target.innerText;   

    // Toggle year buttons
    if (target.className !== "reset" && target.className !== "no-reset"){
        target.classList.toggle("selected");

        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("content").innerHTML = this.responseText;
            }
        };

        let a = `php/year_${text}.php?t=`;

        xmlhttp.open("GET", a + Math.random, true)
        xmlhttp.send();

    // Check button event listener
    } else if (target.className === "no-reset") {
        yearPro.forEach (function(e) {
            e.classList.add("selected");
        });

        pro.forEach (function(e) {
            e.classList.remove("display-none");
        });

    // Close button evenet listener
    } else if (target.className === "reset") {
        yearPro.forEach (function(e) {
            e.classList.remove("selected");
        });

        pro.forEach (function(e) {
            e.classList.add("display-none");
        });

    // Error
    } else {
        alert ('Failure');
    }
    
});