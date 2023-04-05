console.log("Welcome to Tic Tac Toe")
let turn="X"
let winaudio = new Audio("Audio/win.mp3")
let clickaudio = new Audio("Audio/click.mp3")
let gameover = false;

//Function to change turn
const changeTurn = ()=>{
    if(turn =="X"){
        turn = "O"
    }
    else{
        turn = "X"
    } 
}

//Function To check Win 
function checkWin(){
    let boxes = document.getElementsByClassName("boxtext");
    let win_comb = [
        [0,1,2,33, 69 ,0],
        [3,4,5,33,221,0],
        [6,7,8,33,371,0],
        [0,3,6,-111,203,90],
        [1,4,7,54,203,90],
        [2,5,8,190,203,90],
        [0,4,8,41,227,45],
        [2,4,6,35,227,135]
    ];
    let winner = "X";
    win_comb.forEach(e =>{
        if((boxes[e[0]].innerText == boxes[e[1]].innerText) && (boxes[e[1]].innerText == boxes[e[2]].innerText) && boxes[e[0]].innerText != "")
        {
            winaudio.play();
            if(boxes[e[0]].innerText == "X"){
                winner = document.getElementsByClassName("infoL");
                winner[0].style.visibility = "visible";
                winner[0].innerText = `Player X has Won!`;
    
                loser = document.getElementsByClassName("infoR");
                loser[0].style.visibility = "visible";
                loser[0].innerText = `Player O has Lost!`;   
            }
            else{
                winner = document.getElementsByClassName("infoL");
                winner[0].style.visibility = "visible";
                winner[0].innerText = `Player X has Lost!`;
    
                loser = document.getElementsByClassName("infoR");
                loser[0].style.visibility = "visible";
                loser[0].innerText = `Player O has Won!`;
            }
            document.getElementsByClassName("myturnL")[0].style.display = "none";
            document.getElementsByClassName("notmyturnL")[0].style.display = "none";
    
            let img1=document.getElementsByClassName("notmyturnR")[0];
            img1.style.display = "none";
                
            let img2=document.getElementsByClassName("myturnR")[0];
            img2.style.display = "none";

            let winimg = document.getElementsByClassName("")
            gameover = true

            let line = document.querySelector(".line");
            line.style.display = "block";
            line.style.width = "23vw";
            line.style.transform = `translate(${e[3]}px,${e[4]}px)rotate(${e[5]}deg)`;

            document.getElementsByClassName("winning-message")[0].style.display = "flex";
            document.getElementsByClassName("Player")[0].innerText = `${boxes[e[0]].innerText}`;
            document.getElementById("restartbutton").style.display ="block";
        }
    })
}

let line = document.querySelector(".line");
line.style.display = "none";
document.getElementsByClassName("winning-message")[0].style.display = "none";
document.getElementById("restartbutton").style.display ="none";

// Adding resposiveness on boxes

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxtext")
    element.addEventListener('click',()=>{
        if(boxtext.innerText == ''){
            boxtext.innerText = turn;
            clickaudio.play()
            changeTurn();
            checkWin();
            if(!gameover){
                if ( turn == "X"){
                    let vis = document.getElementsByClassName("infoL")[0];
                    vis.style.visibility = "visible";
    
    
                    document.getElementsByClassName("myturnL")[0].style.display = "block";
                    document.getElementsByClassName("notmyturnL")[0].style.display = "none";
    
                    let img1=document.getElementsByClassName("notmyturnR")[0];
                    img1.style.display = "block";
                
                    let img2=document.getElementsByClassName("myturnR")[0];
                    img2.style.display = "none";
    
    
                    vis.innerText =  `Player ${turn}'s turn`;
                    document.getElementsByClassName("infoR")[0].style.visibility = "hidden";
                }
                else{
                    let vis = document.getElementsByClassName("infoR")[0];
                    vis.style.visibility = "visible";
    
    
                    document.getElementsByClassName("myturnL")[0].style.display = "none";
                    document.getElementsByClassName("notmyturnL")[0].style.display = "block";
    
                    let img1=document.getElementsByClassName("myturnR")[0];
                    img1.style.display = "block";
                    let img2=document.getElementsByClassName("notmyturnR")[0];
                    img2.style.display = "none";
    
    
                    vis.innerText = `Player ${turn}'s turn`;
                    document.getElementsByClassName("infoL")[0].style.visibility = "hidden";
                }
            }
            else{

            }

        }
    })
})

//Adding responsiveness to reset button
reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText = "";
    })
    turn = "X";
    document.getElementsByClassName("infoL")[0].style.visibility = "visible";
    document.getElementsByClassName("infoL")[0].innerText = `Player ${turn}'s turn`;
    document.getElementsByClassName("infoR")[0].style.visibility = "hidden";

    let img1=document.getElementsByClassName("myturnL")[0];
    img1.style.display = "block";
    let img2=document.getElementsByClassName("notmyturnR")[0];
    img2.style.display = "block";

    let img3=document.getElementsByClassName("myturnR")[0];
    img3.style.display = "none";
    let img4=document.getElementsByClassName("notmyturnL")[0];
    img4.style.display = "none";

    line.style.display = "none";
    gameover = false;
})

//Adding responsiveness to restart button
restartbutton.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText = "";
    })
    turn = "X";
    document.getElementsByClassName("infoL")[0].innerText = `Player ${turn}'s turn`;
    document.getElementsByClassName("infoR")[0].innerText = `Player ${turn}'s turn`;

    let img1=document.getElementsByClassName("myturnL")[0];
    img1.style.display = "block";
    let img2=document.getElementsByClassName("notmyturnR")[0];
    img2.style.display = "block";

    let img3=document.getElementsByClassName("myturnR")[0];
    img3.style.display = "none";
    let img4=document.getElementsByClassName("notmyturnL")[0];
    img4.style.display = "none";

    line.style.display = "none";
    document.getElementsByClassName("winning-message")[0].style.display = "none";
    document.getElementById("restartbutton").style.display ="none";
    gameover = false;
})