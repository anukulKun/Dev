var buttonOn = document.querySelector(".btno");
var buttonOff = document.querySelector(".btnc");
var popup = document.querySelector(".popup");

buttonOn.addEventListener("click", function() {
    popup.classList.add("hola");
});

buttonOff.addEventListener("click", function() {
    popup.classList.remove("hola");
});
