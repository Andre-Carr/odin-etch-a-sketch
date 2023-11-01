const tileBoard = document.querySelector('.tileBoard');
window.addEventListener('load', () => {
    createTileBoard(16);
});

tileBoard.addEventListener('mouseover', (event) => {
    let target = event.target;
    if(target.classList.contains('tile')) {
        if(target.classList.contains('tileBlackZero')) {
            target.classList.remove('tileBlackZero')
            target.classList.add("tileBlackOne");
        } else if(target.classList.contains('tileBlackOne')) {
            target.classList.remove('tileBlackOne');
            target.classList.add("tileBlackTwo");
        } else if(target.classList.contains('tileBlackTwo')) {
            target.classList.remove('tileBlackTwo');
            target.classList.add("tileBlackThree");
        } else if(target.classList.contains('tileBlackThree')) {
            target.classList.remove('tileBlackThree');
            target.classList.add("tileBlackFour");
        } else if(target.classList.contains('tileBlackFour')) {
            target.classList.remove('tileBlackFour');
            target.classList.add("tileBlackFive");
        } else if(target.classList.contains('tileBlackFive')) {
            target.classList.remove('tileBlackFive');
            target.classList.add("tileBlackSix");
        } else if(target.classList.contains('tileBlackSix')) {
            target.classList.remove('tileBlackSix');
            target.classList.add("tileBlackSeven");
        } else if(target.classList.contains('tileBlackSeven')) {
            target.classList.remove('tileBlackSeven');
            target.classList.add("tileBlackEight");
        } else if(target.classList.contains('tileBlackEight')) {
            target.classList.remove('tileBlackEight');
            target.classList.add("tileBlackNine");
        } else if(target.classList.contains('tileBlackNine')) {
            target.classList.remove('tileBlackNine');
            target.classList.add("tileBlackTen");
        }
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