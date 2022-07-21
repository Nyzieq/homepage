console.log("witam wszystkich!")

let button = document.querySelector(".button");
let body = document.querySelector(".body");
let colorChange = document.querySelector(".colorChange")

button.addEventListener("click", () => {
    body.classList.toggle("grey");

    if (body.classList.contains("grey")) {
        colorChange.innerText = "białe";
    } else {
        colorChange.innerText = "szare";
    }
});