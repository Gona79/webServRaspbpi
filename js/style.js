var nav = document.getElementById("myNav");
var toggle = document.querySelector(".nav-toogle");

toggle.addEventListener("click", function () {
    nav.classList.toggle("open");
});

var dropdownBtns = nav.getElementsByClassName("dropbtn");

for (var i = 0; i < dropdownBtns.length; i++) {
    dropdownBtns[i].addEventListener("click", function (e) {
        var dropdown = this.parentElement;
        if (dropdown.classList.contains("open")) {
            dropdown.classList.remove("open");
        } else {
            dropdown.classList.add("open");
        }
        e.stopPropagation();
    });
}

document.addEventListener('click', function() {
    var dropdowns = document.getElementsByClassName('dropdown');
    for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.remove('open');
    }
});