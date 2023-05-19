// Global variables

let sizeInput = "";
const setSizeButton = document.querySelector("#size-button");
let colorButtons = document.querySelectorAll("button");
let clearButton = document.querySelector("#clear");
let color = "black";
let mouseDown = false;

document.body.onmousedown = function() {
    mouseDown = true;
}

document.body.onmouseup = function() {
    mouseDown = false;
}

// Event listener to fire the default grid size function on Dom content load
document.addEventListener("DOMContentLoaded", defaultSize);



setSizeButton.addEventListener("click", () => {
    sizeInput = document.querySelector("#size-input").value;
    console.log(sizeInput);
    populateBoard(sizeInput);
})

function defaultSize() {
    populateBoard(16);
}

// DON'T USE BELOW, FOR LEARNING REFERENCE ONLY
// event listener that is attached to all the color buttons, and will call the changeColor function to set the CSS color 
// colorButtons.addEventListener("click", (ev) => {
//     let buttonId = ev.target.id;
//     // e.target.getAttribute('id');
//     console.log(buttonId);
// })

// Attaches an event listener to each button on the page by calling a function for each element in the array. Previously wouldn't work because I was trying to attach an event listener to the variable colorButtons, which in turn assigned all buttons to it (reference above)



function populateBoard(input) {
    let board = document.querySelector(".board");
    let populatedBoard = board.querySelectorAll("div");
    populatedBoard.forEach((div) => div.remove());
    
    if (input >= 2 && input <= 100) {
    
        board.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
        board.style.gridTemplateRows = `repeat(${input}, 1fr)`;
    
        for (let i = 0; i < input * input; i++) {
            let square = document.createElement("div");
            square.addEventListener("mouseenter", colorSquare);
            square.style.border = "1px solid black";
            square.classList.add("grid");
            board.insertAdjacentElement("beforeend", square);
        }
    } else {
        alert("Size needs to be between 2 and 100");
    }
}

// function that will set each dynamically created div background color using a global variable for color
function colorSquare() {
    if (mouseDown && color == "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else if (mouseDown) {
        this.style.backgroundColor = color;
    }
}

colorButtons.forEach(b => b.addEventListener("click", changeColor));

function changeColor(poop) {
    // event properties are implicitly captured from the event listener and passed to the function
    let buttonId = poop.target.id;
    console.log(buttonId);
    
    if (buttonId == "black") {
        color = "black";
    } else if (buttonId == "white") {
        color = "white";
    } else if (buttonId == "random") {
        color = "random";
    }
}


// clear the board and reset to default size
clearButton.addEventListener("click", clearBoard);

function clearBoard() {
    let board = document.querySelector(".board");
    // board.innerHTML = "";
    populateBoard(16);
}

// function that will mutate the global variable [color] to whatever the user selects







