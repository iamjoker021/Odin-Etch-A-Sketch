// Create Grid of N Size
const createGridOfNSize = (noOfSquares) => {
    // Get Parent Container
    const gridContainer = document.querySelector('div.squares');

    // Remove Grid
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    // Create Grid inside Parent
    for (let squareNum = 0; squareNum < noOfSquares ** 2; squareNum++) {
        const newSquare = document.createElement('div');

        newSquare.id = squareNum;
        newSquare.addEventListener('mouseenter', (e) => {
            let opacity = (e.target.style.opacity * 100 || 10) + 10;
            e.target.style.opacity = `${opacity}%`;
        })
        
        newSquare.classList.add('square');
        newSquare.style["min-width"] = `${100/noOfSquares}%`;
        
        // Add Random color by altering Random RGB values
        newSquare.style.setProperty('--div-hover-background', `rgb(${(Math.random() * 255) + 1}, ${(Math.random() * 255) + 1}, ${(Math.random() * 255) + 1})`);
        
        gridContainer.appendChild(newSquare);
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

// const gridContainer = document.querySelector('div.square');
// gridContainer.addEventListener('mouseleave', (e) => {
//     console.log('Vale: ',e.target.id);
// })