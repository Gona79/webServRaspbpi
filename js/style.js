function myFunction() {
    var x = document.getElementById("myNav");
    var y = x.getElementsByClassName("dropdown-content");
    if (x.className === "nav-menu") {
        x.className += " responsive";
        for (var i = 0; i < y.length; i++) {
            y[i].style.display = "block";
        }
    } else {
        x.className = "nav-menu";
        for (i = 0; i < y.length; i++) {
            y[i].style.display = "none";
        }
    }
    
    // Ocultar el contenido desplegable cuando la pantalla sea pequeña (móvil)
    if (window.innerWidth <= 768) {
        for (i = 0; i < y.length; i++) {
            y[i].style.display = "none";
        }
    }
}
