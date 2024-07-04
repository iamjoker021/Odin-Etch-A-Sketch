// Create Grid of N Size
const createGridOfNSize = (noOfSquares) => {
    // Get Parent Container
    const squareContainer = document.querySelector('div.squares');

    // Remove Grid
    const grids = squareContainer.children;
    for (const square of grids) {
        squareContainer.removeChild(square);
    }

    // Create Grid inside Parent
    for (let col = 0; col < noOfSquares; col++) {
        for (let row = 0; row < noOfSquares; row++) {
            const newSquare = document.createElement('div');
            newSquare.classList.add('square');
            newSquare.style["min-width"] = `${100/noOfSquares}%`;
            squareContainer.appendChild(newSquare);
        }
    }
}

// Create Intial Grid
let noOfSquares = 16;
createGridOfNSize(16);