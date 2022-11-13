let burger = document.querySelector(".burger");
let menu = document.querySelector(".menu");
console.log(burger, menu);
burger.addEventListener("click", function () {
    menu.classList.toggle("show");
});

