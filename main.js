let sizeInput = "";
const setSizeButton = document.querySelector("#size-button");
let colorButtons = document.querySelectorAll("button");
// let buttonId = "";

setSizeButton.addEventListener("click", () => {
    sizeInput = document.querySelector("#size-input").value;
    console.log(sizeInput);
    populateBoard(sizeInput);
})

// DON'T USE BELOW, FOR LEARNING REFERENCE ONLY
// event listener that is attached to all the color buttons, and will call the changeColor function to set the CSS color 
// colorButtons.addEventListener("click", (ev) => {
//     let buttonId = ev.target.id;
//     // e.target.getAttribute('id');
//     console.log(buttonId);
// })

// Attaches an event listener to each button on the page by calling a function for each element in the array. Previously wouldn't work because I was trying to attach an event listener to the variable colorButtons, which in turn assigned all buttons to it (reference above)
colorButtons.forEach(b => b.addEventListener("click", changeColor));


function changeColor(ev) {
    // captures the event.target.id from the event listener
    let buttonId = ev.target.id;
    console.log(buttonId);
    // need to figure out how to set the color in CSS based on the value of buttonId
}

function populateBoard(Input) {
    let board = document.querySelector(".board");
    let populatedBoard = board.querySelectorAll("div");
    populatedBoard.forEach((div) => div.remove());
    
    board.style.gridTemplateColumns = `repeat(${Input}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${Input}, 1fr)`;
    
    for (let i = 0; i < Input * Input; i++) {
        let square = document.createElement("div");
        // square.style.backgroundColor = "blue";
        square.style.border = "1px solid black";
        square.classList.add("change-color");
        board.insertAdjacentElement("beforeend", square);
    }
}




// function populateBoard(size) {
//     let board = document.querySelector(".board");
//     board.style.gridTemplateColumns = `repeat(${sizeInput}, 1fr)`;
//     board.style.gridTemplateRows = `repeat(${sizeInput}, 1fr)`;
    
//     for (let i = 0; i<256; i++) {
//         let square = document.createElement("div");
//         square.style.backgroundColor = "blue";
//         // square.style.border = "1px solid black";
//         board.insertAdjacentElement("beforeend", square);
//     }
// }

// populateBoard(sizeInput);

// function changeSize(input) {
//     setSizeButton.addEventListener("click", function() {
//         populateBoard(sizeInput);
//     })
// }

