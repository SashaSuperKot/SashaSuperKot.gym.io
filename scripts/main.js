// Smooth Scroll
const links = document.querySelectorAll(".scroll");

for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    });
}


//Pop-up

function openPopUp() {
    document.getElementById("pop-up").style.display = "block";
}

function closePopUp() {
    document.getElementById("pop-up").style.display = "none";
}
 // Burger-Menu

function openModal() {
    document.getElementById("modal").style.top = "0px";
}

function closeModal() {
    document.getElementById("modal").style.top = "-400px";
}