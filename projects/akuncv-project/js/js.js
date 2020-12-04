// Start

// Get all pro elements
const pro = [...document.getElementsByClassName("pro")];
// Get reset element by id
const reset = [...document.getElementsByClassName("reset")];
// Get Year elements by id
const yearPro = [...document.getElementsByClassName("year")];


pro.forEach (function(e) {
    const array = ["2020","2019","2018","2017","2016","2015"];
    
    for (i=0;i<pro.length;i++){

        if(e.innerHTML.indexOf(array[i]) !== -1){

            e.classList.add("display-none");

        };
    }
});

// Event listeners 

//class="year"
document.addEventListener("click", function(e) {
    let target = e.target;
    let text = target.innerText;   

    if (target.className !== "reset" && target.className !== "no-reset"){
        target.classList.toggle("selected");

        pro.forEach (function(e) {
            if(e.innerHTML.indexOf(text) !== -1) {
                e.classList.toggle("display-none");
            };
        });


    } else if (target.className === "no-reset") {
        yearPro.forEach (function(e) {
            e.classList.add("selected");
        });

        pro.forEach (function(e) {
            e.classList.remove("display-none");
        });

    } else if (target.className === "reset") {
        yearPro.forEach (function(e) {
            e.classList.remove("selected");
        });

        pro.forEach (function(e) {
            e.classList.add("display-none");
        });

    } else {
        alert ('Failure');
    }
    
});