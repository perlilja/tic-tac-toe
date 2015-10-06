(function () {
    'use strict';
    
    var drawBoard = function () {
        var parent = document.getElementById('tic-tac-toe') || document.body;
        var board = document.createElement('table');
        
        for(var i = 0; i < 3; i++) {
            var row = document.createElement('tr');
            board.appendChild(row);
            for(var j = 0; j < 3; j++) {
                var cell = document.createElement('td');
                cell.width = cell.height = 50;
                
                row.appendChild(cell);
            }
        }
        
        
        parent.appendChild(board);
    };
    
    window.onload = function () {
        drawBoard();
    }
}());




