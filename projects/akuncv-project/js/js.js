// Start

// Get element by Tag
const eTag = [...document.getElementsByTagName("section")];
// Get all pro elements
const pro = document.getElementsByClassName("pro");
// Get reset element by id
const reset = [...document.getElementsByClassName("reset")];
// Get Year elements by id
const yearPro = [...document.getElementsByClassName("year")];




// Functions


// -----------------------------------------------------------------

// Event listeners 

document.addEventListener("DOMContentLoaded", function() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content").innerHTML = this.responseText;
        }
    };

    let a = `php/year_2020.php?t=`;

    xmlhttp.open("GET", a + Math.random, true)
    xmlhttp.send();

    for (var item of yearPro) {
        if(item.innerText === "2020") {
            item.classList.add("selected");
        }
    }
});


//class="year"

document.addEventListener("click", function(e) {
    let target = e.target;
    let text = target.innerText;   // 2020

        // Toggle year buttons
    if (target.className === "year"){
        
        target.classList.add("selected");

        yearPro.forEach (function(e) {
            if (text !== e.innerText) {
                e.classList.remove('selected');
            }
        });

        let xmlhttp = new XMLHttpRequest();
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
            e.classList.add('selected');
        });

        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("content").innerHTML = this.responseText;
            }
        };

        let a = `php/year_all.php?t=`;

        xmlhttp.open("GET", a + Math.random, true)
        xmlhttp.send();

    // Close button evenet listener
    } else if (target.className === "reset") {
      
        for (var item of pro) {
            item.classList.add("display-none");
        }

        for (var item1 of yearPro) {
            item1.classList.remove("selected");
        }
        
    } else {
        // Error
    }
    
});