// Start
const pro2020 = document.getElementsByClassName("pro-2020");
const pro2019 = document.getElementsByClassName("pro-2019");
const pro2018 = document.getElementsByClassName("pro-2018");
const pro2017 = document.getElementsByClassName("pro-2017");
const pro2016 = document.getElementsByClassName("pro-2016");
const pro2015 = document.getElementsByClassName("pro-2015");


// Toggle To show info according to Year
function hideProAll(input){
    let a = "pro" + input;
    let b = eval(a)
    Array.from(b).forEach (function(e){
        e.classList.toggle('display-none');
    });
}

function addSelectedClass(input){
    let a = "pro" + input + " selected";
    console.log(a);
}

// Fix JS
Array.from(pro2019).forEach (function(e){
    e.classList.add('display-none');
});
Array.from(pro2019).forEach (function(e){
    e.classList.add('display-none');
});
Array.from(pro2018).forEach (function(e){
    e.classList.add('display-none');
});
Array.from(pro2017).forEach (function(e){
    e.classList.add('display-none');
});
Array.from(pro2016).forEach (function(e){
    e.classList.add('display-none');
});
Array.from(pro2015).forEach (function(e){
    e.classList.add('display-none');
});

// Event listeners
document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target, 
        text = target.textContent || target.innerText;   
    
    hideProAll(text);

    e.target.classList.toggle('selected');

}, false);

// End




