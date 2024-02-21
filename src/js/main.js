const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const btn = document.getElementById("btn-smfr");

let current = "green";

function changeLight() {
    if(current === "red") {
        red.style.background = "gray";
        green.style.background = "green";
        current = "green";
    } else if (current === "green") {
        green.style.background = "gray";
        yellow.style.background = "yellow";
        current = "yellow";
    } else if (current === "yellow") {
        yellow.style.background = "gray";
        red.style.background = "red";
        current = "red";
    }
}

btn.addEventListener('click', changeLight);


const greenImg = document.getElementById("green-img");
const yellowImg = document.getElementById("yellow-img");
const redImg = document.getElementById("red-img");

let currentImg = "green";

function changeLightImg() {
    if (currentImg === "red") {
        redImg.src = "./src/img/gray.svg";
        greenImg.src = "./src/img/green.svg";
        currentImg = "green";
    } else if (currentImg === "green") {
        greenImg.src = "./src/img/gray.svg";
        yellowImg.src = "./src/img/yellow.svg";
        currentImg = "yellow";
    } else if (currentImg === "yellow") {
        yellowImg.src = "./src/img/gray.svg";
        redImg.src = "./src/img/red.svg";
        currentImg = "red";
    }
}

setInterval(changeLightImg, 1000);