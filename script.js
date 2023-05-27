const container = document.querySelector(".container");

function createDiv(height, width) {
    for (let i = 0; i < height; i++) {
        let heightDiv = document.createElement("div");
        container.appendChild(heightDiv);
        heightDiv.classList.add("heightDiv", "div")
        for (let j = 0; j < width; j++) {
            let widthDiv = document.createElement("div");
            heightDiv.appendChild(widthDiv);
            widthDiv.classList.add("widthDiv", "div")
        }
    }
}

function getRandomColor() {
    let a = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let c = Math.floor(Math.random() * 255);
    return `rgb(${a}, ${b}, ${c})`;
}

container.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = getRandomColor();
    setTimeout(() => {
        event.target.style.backgroundColor = "";
    }, 500)
});

createDiv(16, 16);
