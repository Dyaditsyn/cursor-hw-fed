"use strict";

// random color generator
const randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

// create single block
const createBlock = (dim) => {
    const container = document.getElementById("root");
    const newBlock = document.createElement("div");
    newBlock.classList.add("block")
    newBlock.style.backgroundColor = randomColor();
    newBlock.style.width = dim + "px";
    newBlock.style.height = dim + "px";
    container.append(newBlock);
}

// generate blocks with random color background
const generateBlocks = (row = 5, col = 5, siz = 50) => {
    const rows = document.getElementById("row").value || row;
    const cols = document.getElementById("col").value || col;
    const dim = document.getElementById("size").value || siz;
    const container = document.getElementById("root");
    container.innerHTML ="";
    container.style.backgroundColor = "aliceblue";
    for (let i = 0; i < rows; i++){
        for (let j = 0; j < cols; j++){
            createBlock(dim);
        }
        container.append(document.createElement("br"));
    }
}

// change blocks colors
const generateBlocksInterval = () => {
    generateBlocks();
    const blocks = document.querySelectorAll(".block");
    setInterval( () => 
    blocks.forEach( block => block.style.backgroundColor = randomColor()), 1000)
}


//--------------------------------------------------------------------------------------------------------------------//

