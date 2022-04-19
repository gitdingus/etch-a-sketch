const clearButton = document.querySelector("#clear-button");
const sketchContainer = document.querySelector("#sketch-container");
const SQUARE = 16;

clearButton.addEventListener('click', clearPanel);

for (let i = 0; i < SQUARE; i++){
    let outerDiv = document.createElement("div");
    outerDiv.classList.add("row");
    for (let j = 0; j < SQUARE; j++){
        let innerDiv = document.createElement("div");
        
        innerDiv.classList.add("column");

        innerDiv.addEventListener('mouseover', (e) => changeBg(e));
        outerDiv.appendChild(innerDiv);
    }

    sketchContainer.appendChild(outerDiv);
}

function clearPanel(){
    const pixels = document.querySelectorAll(".column");

    console.log('Clear button clicked');
    for (let pixel of pixels){
        pixel.style.backgroundColor = "white";
    }
}
function changeBg(event, color = 'black'){
    event.target.style.backgroundColor = color;
}