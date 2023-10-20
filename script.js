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
/* square.addEventListener('mouseout', function (e) {
    e.target.style.backgroundColor = "white";
}) */
});
