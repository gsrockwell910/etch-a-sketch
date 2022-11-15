function createGrid(size) {
    let sketchPad = document.querySelector(".sketchPad");
    let squares = sketchPad.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    sketchPad.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    sketchPad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    let numOfDivs = size * size;
    for (let i = 0; i < numOfDivs; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", fillSquare);
        square.style.backgroundColor = "white";
        sketchPad.insertAdjacentElement("beforeend", square);
    }
};

createGrid(16);

function changeSize(input) {
    let slider = document.querySelector(".slider");
    let sliderOutput = document.querySelector(".sliderOutput");
    slider.addEventListener("change", (e) => {
        let value = e.target.value;
        sliderOutput.textContent = `Grid Size: ${value} X ${value}`;
    });
    if (input >= 16 && input <= 100) {
        createGrid(input);
    } else {
        console.log("ERROR!!!!!!!!!!!!");
    }
};

Slider.onchange = (e) => changeSize(e.target.value)

function fillSquare() {
    this.style.backgroundColor = "black";
}