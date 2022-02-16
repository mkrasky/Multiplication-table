let columns;
let rows;

function multiplyTable(columnNum, rowNum) {
    let grid = document.getElementById('grid');
    // let gridcolumns = 

    for(let i = 0; i < rowNum+1; i++){
        for(let j = 0; j < columnNum+1; j++){
            let value = document.createElement('div');
            let cellValue = i * j;

            value.className = 'grid-item';
            value.innerHTML = `${cellValue}`;

            if(i == 0 && j == 0){
                value.innerHTML = "*";
                value.className = 'grid-item sign';
            }else if(i == 0){
                value.innerHTML = `${j}`;
                value.className = 'grid-item top-bar';
            } else if(j == 0){
                value.innerHTML = `${i}`;
                value.className = 'grid-item left-bar';
            }

            grid.appendChild(value);

            
        }
    }

    grid.style.gridTemplateColumns = `repeat(${columnNum + 1}, auto)`;
    grid.style.gridTemplateRows = `repeat(${rowNum + 1}, auto)`;
}

function load() {
    columns = prompt('How many columns would you like?', '10');

    columns = Number(columns);
    while(isNaN(columns)){
        columns = prompt('Please enter a whole number.', '10');
    }

    rows = prompt('How many rows would you like?', '10');

    rows = Number(rows);
    while(isNaN(rows)){
        rows = prompt('Please enter a whole number.', '10');
    }

    multiplyTable(columns, rows);
}

window.onload = load;