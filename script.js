const body = document.querySelector("body");

const container = document.querySelector(".container");

for (i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
}

const squares = document.querySelectorAll(".square");

squares.forEach(function(square) {
square.addEventListener('mouseover', function (e) {
    e.target.style.backgroundColor = "black";
})
});

const gridBtn = document.querySelector(".set-grid-size");

const drawText = document.querySelector(".draw");

gridBtn.addEventListener('click', function() {
    let gridSize = prompt('Please enter your desired grid size between 1 and 100.', '');
    if (gridSize <= 0) {
        alert('Please enter a size over 0.');
    }
    else if (gridSize > 100) {
        alert('Please enter a size less than 100.');
    }
    else if (gridSize > 0 && gridSize <= 100) {
        let gridArea = gridSize * gridSize;
        console.log(gridSize, gridArea);
        body.removeChild(container);
        const container2 = document.createElement("div");
        container2.classList.add("container2");
        body.appendChild(container2);
        for (i = 0; i < gridArea; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            container2.appendChild(square);
        }
        container2.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        container2.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;


        const newSquares = document.querySelectorAll(".square");
        newSquares.forEach(function(square) {
            square.addEventListener('mouseover', function (e) {
                e.target.style.backgroundColor = "black";
            })
            });

            body.removeChild(gridBtn);
            const link = document.createElement("a");
            link.setAttribute("href", "index.html");
            link.classList.add("reload");
            link.textContent = "Click here to reload page"

            //let buttontext = document.createTextNode("Click here to reload page");
            //reloadBtn.appendChild(buttontext);
            body.insertBefore(link, drawText);





    }
});




// function buttonClick() {
//     let gridSize = prompt("Please enter your desired grid size.", '');
//     if (gridSize <= 0) {
//         gridSize = prompt("Please enter a size over 0.", '');
//     }
// }
