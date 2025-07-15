const topLeft = document.querySelector('#top-left');
const topCenter = document.querySelector("#top-center");
const topRight = document.querySelector('#top-right');
const middleLeft = document.querySelector('#middle-left');
const middleCenter = document.querySelector("#middle-center");
const middleRight = document.querySelector('#middle-right');
const bottomLeft = document.querySelector('#bottom-left');
const bottomCenter = document.querySelector("#bottom-center");
const bottomRight = document.querySelector('#bottom-right');
const player1 =document.querySelector("#player1");
const player2 =document.querySelector("#player2")
const score1 = document.querySelector(".score1");
const score2 = document.querySelector(".score2");
const name1 = document.querySelector(".name1");
const name2 =document.querySelector(".name2");
const reset = document.querySelector("#reset");
let cellr = document.querySelectorAll(".cell");
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
    
   reset.addEventListener("click",()=>{
    window.location.reload();
   });
   
    player2.addEventListener("change",()=>{
        name2.textContent=player2.value;
    });
    player1.addEventListener("change",()=>{
        name1.textContent=player1.value;
    });
function clean(){
    for(let i=0; i<cellr.length;i++){
        cellr[i].textContent = '';
    }
    for(let i=0; i<3;i++){
        for(let j =0; j<3; j++){
            board[i][j]=0;
        }
    }
    counter =0;

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
            score.textContent++;
            clean();
            return
        }if(result =="OOO"){
            player2Counter++;
              score1.textContent++;
            clean();
            return
        }
        console.log(result);
        result = '';
    }
     for(let i=0;i<columns; i++){
        for(let j =0; j<rows;j++){
            result+=board[j][i]
        }
        if(result =='XXX'){
            player1Counter++;
              score2.textContent++;
            clean();
            return
        }if(result =="OOO"){
            player2Counter++;
            score1.textContent++;
            clean();
            return
        }
        result = '';
    }
    if(board[0][0]+board[0][1]+board[0][2] == 'OOO'){
         player1Counter++
          score1.textContent++;
        clean();
        return
    }
    if(board[0][0]+board[1][1]+board[2][2] == 'XXX'){
        player2Counter++
          score2.textContent++;
        clean();
        return
    }
    if(board[0][0]+board[1][1]+board[2][2] == 'OOO'){
        player1Counter++
        score1.textContent++;
        clean();
        return
    }
    if(board[2][0]+board[1][1]+board[0][2] == 'XXX'){
        player1Counter++
          score2.textContent++;
        clean();
        return
    }
    if(board[2][0]+board[1][1]+board[0][2] == 'OOO'){
        player2Counter++
        score1.textContent++;
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
function getUI(element){
    if(element.id == 'top-left'){
        board[0][0] = element.textContent;
    }
    else if(element.id == 'top-center'){
        board[0][1] = element.textContent;
    }
     else if(element.id == 'top-right'){
        board[0][2] = element.textContent;
    }
      else if(element.id == 'middle-left'){
        board[1][0] = element.textContent;
    }
    else if(element.id == 'middle-center'){
        board[1][1] = element.textContent;
    }
     else if(element.id == 'middle-right'){
        board[1][2] = element.textContent;
    }
       else if(element.id == 'bottom-left'){
        board[2][0] = element.textContent;
    }
    else if(element.id == 'bottom-center'){
        board[2][1] = element.textContent;
    }
     else if(element.id == 'bottom-right'){
        board[2][2] = element.textContent;
    }
}
 function userInterface(){

 cellr.forEach((element) =>{
     element.addEventListener("click", function (e){
         
        if(!(e.target.textContent =="X" || e.target.textContent =='O')){
            ++counter
              if(isEven(counter)){
               element.textContent= "X"
               getUI(e.target);
               checkWinner();

        } else{
            element.textContent = 'O';
            getUI(e.target);
            checkWinner();
        }

        } else{
            return
        }
      
        
    })
 })
   
}

userInterface();
}

function isEven(n){
   return n%2 ==0;
}

  

gameBoard();