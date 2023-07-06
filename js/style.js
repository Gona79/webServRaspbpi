var nav = document.getElementById("myNav");
var toggle = document.querySelector(".nav-toogle");

toggle.addEventListener("click", function () {
    nav.classList.toggle("open");
});

var dropdownBtns = nav.getElementsByClassName("dropbtn");

for (var i = 0; i < dropdownBtns.length; i++) {
    dropdownBtns[i].addEventListener("click", function (e) {
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
        e.stopPropagation();
    });
}
