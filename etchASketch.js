const tileBoard = document.querySelector('.tileBoard');
window.addEventListener('load', () => {
    createTileBoard(16);
});

tileBoard.addEventListener('mouseover', (event) => {
    let target = event.target;
    if(target.classList.contains('tile')) {
        target.classList.toggle("tileBlack");
    }
});

const setTileSizeButton = document.querySelector('.setTileSize');
setTileSizeButton.addEventListener('click', () => {
    let size = prompt("Set Tile Size (Max of 100x100)");
    size = (size > 100) ? 100 : size;
    createTileBoard(size);
});

function createTileBoard(amount) {
    tileBoard.replaceChildren();
    for(let i = 0; i < amount; i++) {
        let tileRow = document.createElement('div');
        tileRow.setAttribute('class', 'tileRow');
        for(let j = 0; j < amount; j++) {
            let tile = document.createElement('div');
            tile.setAttribute('class', 'tile');
            tileRow.appendChild(tile);
        }
        tileBoard.appendChild(tileRow);
    }
}