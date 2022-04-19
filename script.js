const clearButton = document.querySelector("#clear-button");
const gridButton = document.querySelector("#grid-button");
const gridInput = document.querySelector("#grid-input");
const sketchContainer = document.querySelector("#sketch-container");

clearButton.addEventListener('click', clearPanel);

gridButton.addEventListener('click', () => {
    let input = Number(gridInput.value);

    if (Number.isInteger(input) === true){
        if (input >=16 && input <= 100){
            drawGrid(input);
        }
        else {
            alert("Grid size must be between 16 and 100");
        }
    }
    else{
        alert("Must input whole number between 16 and 100");
    }

    console.log(typeof input);
})

drawGrid(16); //default grid size 

function drawGrid(size){

    clearGrid();
    for (let i = 0; i < size; i++){
        let outerDiv = document.createElement("div");
        outerDiv.classList.add("row");
        for (let j = 0; j < size; j++){
            let innerDiv = document.createElement("div");
            
            innerDiv.classList.add("column");
    
            innerDiv.addEventListener('mouseover', (e) => changeBg(e));
            outerDiv.appendChild(innerDiv);
        }
    
        sketchContainer.appendChild(outerDiv);
    }
}

function clearGrid(){
    let children = sketchContainer.childNodes;

    while(children.length != 0){
        sketchContainer.removeChild(children[0]);
    }
    
}

function clearPanel(){
    const pixels = document.querySelectorAll(".column");

    for (let pixel of pixels){
        pixel.style.backgroundColor = "white";
    }
}

function changeBg(event, color = 'black'){
    event.target.style.backgroundColor = color;
}