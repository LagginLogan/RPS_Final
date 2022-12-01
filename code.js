function rock(){

    let compVar = document.getElementById('compPara');
    let playVar = document.getElementById('playPara');
    let winVar = document.getElementById('resultPara');
    let pChoice = "Player: Rock";

    let cNum = Math.floor(Math.random() * 3 + 1);
    if (cNum == 1) {
        cChoice = "Enemy: Rock";
        wResult = "You Tied";
    } else if (cNum == 2) {
        cChoice = "Enemy: Scissors";
        wResult = "You Win";
    } else {
        cChoice = "Enemy: Paper";
        wResult = "You Lose";
    }
    playVar.innerText = pChoice;
    compVar.innerText = cChoice;
    winVar.innerText = wResult;
}


function paper(){
    
    let compVar = document.getElementById('compPara');
    let playVar = document.getElementById('playPara');
    let winVar = document.getElementById('resultPara');

    let pChoice = "Player: Paper";
    
    let cNum = Math.floor(Math.random() * 3 + 1);
    if (cNum == 1) {
        cChoice = "Enemy: Rock";
        wResult = "You Win";
    } else if (cNum == 2) {
        cChoice = "Enemy: Scissors";
        wResult = "You Lose";
    } else {
        cChoice = "Enemy: Paper";
        wResult = "You Tied";
    }
    playVar.innerText = pChoice;
    compVar.innerText = cChoice;
    winVar.innerText = wResult;    
}

function scissors(){

    let compVar = document.getElementById('compPara');
    let playVar = document.getElementById('playPara');
    let winVar = document.getElementById('resultPara');

    let pChoice = "Player: Scissors";

    let cNum = Math.floor(Math.random() * 3 + 1);
    if (cNum == 1) {
        cChoice = "Enemy: Rock";
        wResult = "You Lose";
    } else if (cNum == 2) {
        cChoice = "Enemy: Scissors";
        wResult = "You Tied";
    } else {
        cChoice = "Enemy: Paper";
        wResult = "You Win";
    }
    playVar.innerText = pChoice;
    compVar.innerText = cChoice;
    winVar.innerText = wResult;

}