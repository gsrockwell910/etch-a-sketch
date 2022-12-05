let keyDown = true;
let color = "black";

function createCanvas(size) {
    let canvas = document.querySelector(".canvas");
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let squares = document.querySelectorAll("div");
    squares.forEach((div) => {
        div.style.backgroundColor = "white";
    })

    let number = size * size;
    for(let i = 0; i < number; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", colorSquares);
        canvas.insertAdjacentElement("beforeend", square);
    }
}

function colorSquares() {
   if(keyDown) {
     this.style.backgroundColor = color;
   } 
}

document.addEventListener("keydown", (event) => {
    event.preventDefault();
    if(event.key === " ") {
        keyDown = !keyDown;
    } else {
        return;
    }
} );

function resetCanvas() {
    let canvas = document.querySelector(".canvas");
    let squares = document.querySelectorAll("div");
    squares.forEach((div) => {
        div.style.backgroundColor = "white";
    })
};

function changeColor(selection) {
    color = selection;
} 

function resizeCanvas(value) {
    createCanvas(value);
}

createCanvas(16);