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