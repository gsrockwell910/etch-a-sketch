function createCanvas(size) {
    let canvas = document.querySelector(".canvas");
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let number = size * size;
    for(let i = 0; i < number; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", colorSquares);
        canvas.insertAdjacentElement("beforeend", square);
    }
}

function colorSquares() {
    this.style.backgroundColor = "black";
}

createCanvas(16);