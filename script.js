// Create Grid of N Size
const createGridOfNSize = (noOfSquares) => {
    // Get Parent Container
    const squareContainer = document.querySelector('div.squares');

    // Remove Grid
    while (squareContainer.firstChild) {
        squareContainer.removeChild(squareContainer.firstChild);
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

const onClickGetUserInputAndCreateGrid = () => {
    do {
        noOfSquares = parseFloat(prompt('Enter Size of Grid(Integer from 1 to 100): '));
    }
    while (!(Math.round(noOfSquares) === noOfSquares && noOfSquares > 0 && noOfSquares <= 100))

    createGridOfNSize(noOfSquares);
    
}