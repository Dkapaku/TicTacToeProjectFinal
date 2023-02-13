//Gameplan: Give elements to each part that needs to be pressed
//Player should alternate between X' and O'
// Button click RESET should reset the gamestate to base
//Win conditions 
let winCon=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
let buttonElement=document.getElementById("reset")
let messageElement=document.getElementsByTagName("p")
let tableElement=document.getElementsByClassName("square")
let player1=true
let winMessage=document.getElementById("winMessage")
function clickOnSquare(event){
    if(!(event.target.innerHTML=="X" || event.target.innerHTML == "O")){
        if (player1==true){
            player1=false;
        event.target.innerHTML = "X"}
        else if (player1==false) {
            player1=true
            event.target.innerHTML = "O"}
        winningConditionFulfilled()
    }
}
for(let i=0; i<tableElement.length; i++){tableElement[i].addEventListener("click", clickOnSquare)}

function winningConditionFulfilled(){
    for (let index=0;index<winCon.length; index++){
        let squarewinOne=document.getElementById(winCon[index][0].toString())
        let squarewinTwo=document.getElementById(winCon[index][1].toString())
        let squarewinThree=document.getElementById(winCon[index][2].toString())
        console.log(squarewinOne.textContent)
        if ((squarewinOne.textContent==squarewinTwo.textContent)&&(squarewinTwo.textContent==squarewinThree.textContent)){
            if(squarewinOne.textContent=="X"){
                console.log("Works")
                winMessage.innerHTML="X Wins"
            }
            else if(squarewinOne.textContent=="O"){
                console.log("O Wins")
                winMessage.innerHTML="O Wins"
            }
        }
   }
   if (!(winMessage.innerHTML =="X Wins" || winMessage.innerHTML=="O Wins")){
    let boardIsFull=true
    for (let index=0;index<tableElement.length;index++){
        let square=document.getElementById(index.toString())
        if(square.textContent=="") {
            boardIsFull=false
        }
    }
    if (boardIsFull==true){winMessage.innerHTML="Draw"}
   }
}
function resetBoard(){
    for(let index=0;index<tableElement.length;index++){
        let squareClear=document.getElementById(index.toString())
        squareClear.innerHTML=""
        winMessage.innerHTML=""
    }
}
buttonElement.addEventListener("click", resetBoard)