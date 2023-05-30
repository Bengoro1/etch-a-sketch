const container = document.querySelector(".container");
function createDiv(width, height) {
    for (let i = 0; i < width; i++) {
        let widthDiv = document.createElement("div");
        container.appendChild(widthDiv);
        widthDiv.classList.add("widthDiv", "div")
        for (let j = 0; j < height; j++) {
            let heightDiv = document.createElement("div");
            widthDiv.appendChild(heightDiv);
            heightDiv.classList.add("heightDiv", "div")
            heightDiv.style.height = `${(700 - height) / height}px`;
            heightDiv.style.width = `${(700 - width) / width}px`;
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

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let width;
    while(true) {
        width = prompt("How many boxes horizontally do you want?", 16);
        if((width > 0 && width <= 100) || width === null) {    
            break ;
        } else if (width < 0) {
            alert("Can't make negative number of boxes");
        } else if (width > 100) {
            alert("Too large number, max is 100");
        } else { 
            alert("Invalid entry. Try a number from 1 to 100");
        }
    }
    let height;
    while(true) {
        height = prompt("How many boxes horizontally do you want?", 16);
        if((height > 0 && height <= 100) || height === null) {    
            break;
        } else if (height < 0) {
            alert("Can't make negative number of boxes");
        } else if (height > 100) {
            alert("Too large number, max is 100");
        } else { 
            alert("Invalid entry. Try a number from 1 to 100");             
        }
    }
    if ((width > 0 && width <= 100) && (height > 0 && height <= 100)) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        createDiv(width, height);
    }
});

createDiv(16, 16);
