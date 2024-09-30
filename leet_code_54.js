//54. Spiral Matrix
var spiralOrder = function(matrix) {
    let x = 0;
    let y = 0;

    const UP = "UP";
    const LEFT = "LEFT";
    const RIGHT = "RIGHT";
    const DOWN = "DOWN";
    const STOP = "STOP";
    let movement = RIGHT;

    let array = []
    while(
        matrix[y][x] != STOP && matrix[y][x] != undefined
    ){
        array.push(matrix[y][x]);
        matrix[y][x] = STOP;
        if(movement == RIGHT){
            if(x == matrix[0].length-1 || matrix[y][x+1] == STOP)
                movement = DOWN;
            else
                x++; 
        }
        if(movement == DOWN){
            if(y == matrix.length-1 || matrix[y+1][x] == STOP)
                movement = LEFT;
            else
                y++; 
        }
        if(movement == LEFT){
            if(x == 0 || matrix[y][x-1] == STOP)
                movement = UP
            else
                x--;
        }
        if(movement == UP){
            if(y == 0 || matrix[y-1][x] == STOP){
                movement = RIGHT
                x++;
            }
            else
                y--;
        }
    }

    return array;

};