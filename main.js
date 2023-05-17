let sizeInput = "";
const setSizeButton = document.querySelector("#size-button");

setSizeButton.addEventListener("click", () => {
    sizeInput = document.querySelector("#size-input").value;
    console.log(sizeInput);
    populateBoard(sizeInput);
})

function populateBoard(Input) {
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${Input}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${Input}, 1fr)`;
    
    for (let i = 0; i < Input * Input; i++) {
        let square = document.createElement("div");
        square.style.backgroundColor = "blue";
        square.style.border = "1px solid black";
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

