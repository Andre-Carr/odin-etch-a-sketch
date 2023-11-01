const tileBoard = document.querySelector('.tileBoard');
window.addEventListener('load', () => {
    createTileBoard(16);
});

/* 
 * Use event delegation to capture mousover event as there is a
 * a large number of items that need to be captured and allows 
 * for the number of items to change dynamically.
*/
tileBoard.addEventListener('mouseover', (event) => {
    let target = event.target;
    if(target.classList.contains('tile')) {
        target.classList.forEach((tileClass) => {
            switch(tileClass) {
                case 'tileBlackZero':
                    target.classList.remove('tileBlackZero')
                    target.classList.add("tileBlackOne"); 
                    break;
                case 'tileBlackOne':
                    target.classList.remove('tileBlackOne');
                    target.classList.add("tileBlackTwo");
                    break;
                case 'tileBlackTwo':
                    target.classList.remove('tileBlackTwo');
                    target.classList.add("tileBlackThree"); 
                    break;
                case 'tileBlackThree':
                    target.classList.remove('tileBlackThree');
                    target.classList.add("tileBlackFour");
                    break;
                case 'tileBlackFour':
                    target.classList.remove('tileBlackFour');
                    target.classList.add("tileBlackFive");
                    break;
                case 'tileBlackFive':
                    target.classList.remove('tileBlackFive');
                    target.classList.add("tileBlackSix");
                    break;
                case 'tileBlackSix':
                    target.classList.remove('tileBlackSix');
                    target.classList.add("tileBlackSeven");
                    break;
                case 'tileBlackSeven':
                    target.classList.remove('tileBlackSeven');
                    target.classList.add("tileBlackEight");
                    break;
                case 'tileBlackEight':
                    target.classList.remove('tileBlackEight');
                    target.classList.add("tileBlackNine"); 
                    break;
                case 'tileBlackNine':
                    target.classList.remove('tileBlackNine');
                    target.classList.add("tileBlackTen");
                    break;
            }
        });
    }
});

const setTileSizeButton = document.querySelector('.setTileSizeButton');
setTileSizeButton.addEventListener('click', () => {
    let size = prompt("Set Tile Size (Max of 100x100)");
    size = (size > 100) ? 100 : size;
    createTileBoard(size);
});

const clearButton = document.querySelector('.clearButton');
clearButton.addEventListener('click', () => {
    clearTiles();
});

function createTileBoard(amount) {
    tileBoard.replaceChildren();
    for(let i = 0; i < amount; i++) {
        let tileRow = document.createElement('div');
        tileRow.setAttribute('class', 'tileRow');
        for(let j = 0; j < amount; j++) {
            let tile = document.createElement('div');
            tile.classList.add('tile');
            tile.classList.add('tileBlackZero');
            tileRow.appendChild(tile);
        }
        tileBoard.appendChild(tileRow);
    }
}

function clearTiles() {
    const tileList = document.querySelectorAll('.tile');
    tileList.forEach((tile)=> {
        tile.classList.remove('tileBlackOne');
        tile.classList.remove('tileBlackTwo');
        tile.classList.remove('tileBlackThree');
        tile.classList.remove('tileBlackFour');
        tile.classList.remove('tileBlackFive');
        tile.classList.remove('tileBlackSix');
        tile.classList.remove('tileBlackSeven');
        tile.classList.remove('tileBlackEight');
        tile.classList.remove('tileBlackNine');
        tile.classList.remove('tileBlackTen');

        tile.classList.add("tileBlackZero");
    });
}