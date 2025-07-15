function gameBoard(){
    let counter =0;
    const board =[];
    const rows = 3;
    const columns =3;
    for(let i=0;i<rows;i++){
        board[i] =[];
        for(let j=0; j<columns;j++){
            board[i].push(cell());
        }
    }
    console.log(board);
    function cell() {
        value= 0;
        return value;
    };
    function play(vertical,horizontal){
    
    let positionVert;
    let positionHoriz;
    if(vertical == "top") positionVert = 0;
    else if(vertical == 'middle') positionVert =1;
    else if (vertical == 'bottom') positionVert = 2;
    if(horizontal == 'left') positionHoriz = 0;
    else if(horizontal == 'center') positionHoriz = 1;
    else if(horizontal == 'right') positionHoriz = 2;
 
    if(board[positionVert][positionHoriz] == 'X' || board[positionVert][positionHoriz] == 'O' ){
        return 
    }else{
       
        isEven(counter) ? board[positionVert][positionHoriz] ='X': board[positionVert][positionHoriz] = 'O';
         ++counter
    }
   
}
function isEven(n){
   return n%2 ==0;
}

play('bottom','right');
play('bottom','center');
console.log(board.map(row => row.join(', ')).join('\n'))
}

gameBoard();