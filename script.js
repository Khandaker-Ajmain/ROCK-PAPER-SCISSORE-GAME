function startGame(userClick) {
    // FIND YOUR CHOICE
    const userChoice = userClick.id;

    // FIND COMPUTER CHOICE
    const computerOptions = ["rock", "paper", "scissore"];
    const computerChoiceInNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerOptions[computerChoiceInNumber];

    const resultMessage = detectwinner(userChoice, computerChoice);

    frontEnd(userChoice, computerChoice, resultMessage);

}

function detectwinner(userChoice, computerChoice) {

    let  result = "";
    if (userChoice == computerChoice) {

        result = "YOU TIED";
        
    }else if (userChoice == "rock" & computerChoice == "paper" || userChoice == "paper" && computerChoice == "scissore" || userChoice == "scissore" && computerChoice == "rock") {
        
        result = "YOU LOST!";

    }else if (computerChoice == "rock" & userChoice == "paper" || computerChoice == "paper" && userChoice == "scissore" || computerChoice == "scissore" && userChoice == "rock") {
        
        result = "YOU W0N";

    }else {
        
        result = "Something Went Wrong";
    
    }

    return result;

}

function frontEnd(userChoice, computerChoice, resultMessage) {

    let rockImage = document.getElementById("rock").src;
    let paperImage = document.getElementById("paper").src;
    let scissoreImage = document.getElementById("scissore").src;

    let options = document.getElementsByClassName("options");
    for (var i=0; i<options.length; i+=1){
        options[i].style.display = 'none';
    }

    if (computerChoice == "rock") {
        var showComputerChoice = rockImage;
    }else if (computerChoice == "paper") {
        var showComputerChoice = paperImage;
    }else if (computerChoice == "scissore") {
        var showComputerChoice = scissoreImage;
    }


    if (userChoice == "rock") {
        var showUserChoice = rockImage;
    }else if (userChoice == "paper") {
        var showUserChoice = paperImage;
    }else if (userChoice == "scissore") {
        var showUserChoice = scissoreImage;
    }

    // SHOW COMPUTE CHOICE
    let computeResultDIV = document.createElement("div");
    let computerResultImg = document.createElement("img");
    computerResultImg.setAttribute('src', showComputerChoice);
    computerResultImg.classList.add("resultImgComputer");
    let createComputerDiv = document.getElementsByClassName("wraper")[0].appendChild(computeResultDIV);
    createComputerDiv.appendChild(computerResultImg);

    // SHOW RESULT TEXT
    let resultDIV = document.createElement("div");
    let resultText = document.createElement("h1");
    resultText.innerHTML = resultMessage;

    if (resultMessage == "YOU TIED") {
        resultText.classList.add('tie');
    }else if (resultMessage == "YOU W0N") {
        resultText.classList.add('won');
    }else if (resultMessage == "YOU LOST") {
        resultText.classList.add("lost");
    }else {
        resultText.classList.add("worning");
    }

    let createResultDiv = document.getElementsByClassName("wraper")[0].appendChild(resultDIV);
    createResultDiv.appendChild(resultText);

    // SHOW USER CHOICE
    let userResultDIV = document.createElement("div");
    let userResultImg = document.createElement("img");
    userResultImg.setAttribute('src', showUserChoice);
    userResultImg.classList.add("resultImgUser");
    let createUserDiv = document.getElementsByClassName("wraper")[0].appendChild(userResultDIV);
    createUserDiv.appendChild(userResultImg);

}