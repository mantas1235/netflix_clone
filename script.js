"use strict"

const faq = document.querySelectorAll(".faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {

        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}





// const para = document.querySelector(".para")


// button.addEventListener("click", function (e) {
//     if (para.classList.contains("active")) {
//         para.classList.remove("active")
//     }

//     else { para.classList.add("active") }
// })


// const btncont = document.querySelector(".button_container")
// const para = document.querySelectorAll(".para")
// const button = document.querySelectorAll(".experiment")


// btncont.addEventListener("click", function (e) {

//     if (para.classList.contains("active")) {
//         para.classList.remove("active")
//     }
//     else (para.classList.add("active"))


// })


