const tileBoard = document.querySelector('.tileBoard');
window.addEventListener('load', () => {
    createTileBoard(16);
});
function createTileBoard(amount) {
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