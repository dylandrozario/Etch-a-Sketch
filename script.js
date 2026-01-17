const grid = document.querySelector(".gridContainer");
const btn = document.querySelector("button");

let currentGridSize = 10;

function createGrid(columns) {
    grid.replaceChildren();

    const containerSize = 750; // #container height
    const rows = columns; // set grid to square
    const childDivSize = containerSize / columns; // as grid set to square


    for (let i = 0; i < columns * rows; i++) {
        const childDiv = document.createElement("div");
        childDiv.classList.add("child");
        childDiv.style.width = `${childDivSize}px`;
        childDiv.style.height = `${childDivSize}px`;

        childDiv.addEventListener("mouseover", () =>{
            childDiv.style.backgroundColor = "black";
        });
    
        grid.appendChild(childDiv);
    }
}

createGrid(currentGridSize);

btn.addEventListener("click", (e) => {
    const num = prompt("Enter how many columns/rows do you want");
    if(num > 100 || num < 1){
        alert("Wrong input, please use number between 1 and 100");
        return;
    }

    currentGridSize = num;
    createGrid(currentGridSize);
});




