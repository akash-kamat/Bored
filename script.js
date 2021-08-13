

if (screen.width < 700) {
    VANTA.NET({
        el: '#back',
        points: 10.00,
        maxDistance: 20.00,
        spacing: 19.00,
        zoom: 0.75,
    })
} else {
    effect = VANTA.NET({
        el: '#back',
        points: 13.00,
        maxDistance: 25.00,
        spacing: 19.00,
        zoom: 0.75,
    })
}

// Button code below
var animateButton = function (e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
        e.target.classList.remove('animate');
    }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}


// Actual code below

function getActivity() {
    fetch("https://www.boredapi.com/api/activity/")
        .then((response) => response.json())
        .then((data) => display(data));
}
list = [];
function display(data) {
    btn = document.getElementById("bored-btn")
    act = document.getElementById("display");
    mid = document.getElementById("main")
    mid.classList.remove("midarea");
    mid.classList.add("midarea-after");
    // btn.classList.remove("bubbly-button");
    btn.classList.add("bubbly-button-after")
    btn.innerHTML = "Next >";
    act.innerHTML = data.activity;
    list.push(data.activity);
}

function makebtns() {

}

function newf() {
    console.log("hi")
}



