var nav = document.getElementById("myNav");
var toggle = document.querySelector(".nav-toogle");
var mainContent = document.querySelector('.content'); // Aquí es donde hice la modificación

toggle.addEventListener("click", function () {
    nav.classList.toggle("open");

    // Si el menú está abierto, agrega el margen superior al contenido principal
    // Si no está abierto, quita el margen
    if (nav.classList.contains("open")) {
        mainContent.style.marginTop = nav.offsetHeight + 'px'; // El margen es igual a la altura de 'nav'
    } else {
        mainContent.style.marginTop = '0';
    }
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