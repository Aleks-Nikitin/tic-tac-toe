function gameBoard(){
    let counter =0;
    let player1Counter =0;
    let player2Counter =0;
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
        checkWinner();
        console.log(`${player1Counter}-1st player`);
        console.log(`${player2Counter}-2nd player`);
         ++counter
    }
   
}
function isEven(n){
   return n%2 ==0;
}
function clean(){
    for(let i=0; i<3;i++){
        for(let j =0; j<3; j++){
            board[i][j]=0;
        }
    }
}
function checkWinner(){
    let result;
    let tieBraker =[];
    for(let i=0;i<columns; i++){
        for(let j =0; j<rows;j++){
            result+=board[i][j]
        }
        if(result =='XXX'){
            player1Counter++;
            clean();
            return
        }else if(result =="OOO"){
            player2Counter++;
            clean();
            return
        }
        result = '';
    }
     for(let i=0;i<columns; i++){
        for(let j =0; j<rows;j++){
            result+=board[j][i]
        }
        if(result =='XXX'){
            player1Counter++;
            clean();
            return
        }else if(result =="OOO"){
            player2Counter++;
            clean();
            return
        }
        result = '';
    }
    if(board[0][0]+board[1][1]+board[2][2] == 'XXX'){
        player1Counter++
        clean();
        return
    }
    if(board[0][0]+board[1][1]+board[2][2] == 'OOO'){
        player2Counter++
        clean();
        return
    }
    if(board[2][0]+board[1][1]+board[0][2] == 'XXX'){
        player1Counter++
        clean();
        return
    }
    if(board[2][0]+board[1][1]+board[0][2] == 'OOO'){
        player2Counter++
        clean();
        return
    }
   
     for(let i=0;i<columns; i++){
        for(let j =0; j<rows;j++){
            tieBraker.push(board[j][i])
        } }
         if(!(tieBraker.includes(0))){
        clean();
        tieBraker=[];
    }
  
}
play('bottom','right');
play('bottom','center');
play('middle','center');
play('bottom','left');
play('middle','left');
play('middle','right');
play('top', 'center');
play('top', 'left');
play('top', 'right');

console.log(board.map(row => row.join(', ')).join('\n'))
}

gameBoard();