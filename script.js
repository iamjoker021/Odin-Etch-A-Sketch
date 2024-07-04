// Add Div grid to Div Container

const squareContainer = document.querySelector('div.squares')

let noOfSquares = 16;
for (let col = 0; col < noOfSquares; col++) {
    for (let row = 0; row < noOfSquares; row++) {
        const newSquare = document.createElement('div')
        newSquare.classList.add('square');
        newSquare.style["min-width"] = `${100/noOfSquares}%`
        squareContainer.appendChild(newSquare);
    }
}