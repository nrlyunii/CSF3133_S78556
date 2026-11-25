// Store game information

let gameStarted = false;

let wins = 0;
let losses = 0;
let draws = 0;

let round = 0;

let results = [];

// Start Game

function startGame(){

    let playerName =
        document.getElementById("playerName").value;

    if(playerName === ""){
        alert("Please enter your name.");
        return;
    }

    gameStarted = true;

    document.getElementById("result").innerHTML =
        "Welcome, " + playerName + "!";

    document.getElementById("result").style.color =
        "black";

    document.getElementById("startTime").innerHTML =
        "Game Started: " + new Date();
}

// Computer Choice

function getComputerChoice(){

    let choices =
        ["rock", "paper", "scissors"];

    let randomIndex =
        Math.floor(Math.random() * 3);

    return choices[randomIndex];
}

// Play Round

function playRound(playerChoice){

    if(!gameStarted){
        alert("Click Start Game first.");
        return;
    }

    let computerChoice =
        getComputerChoice();

    document.getElementById("playerImg").src =
        playerChoice + ".png";

    document.getElementById("computerImg").src =
        computerChoice + ".png";

    let resultText = "";

    if(playerChoice === computerChoice){

        resultText = "Draw";
        draws++;

        document.getElementById("result")
            .style.color = "gray";
    }

    else if(

        (playerChoice === "rock" &&
        computerChoice === "scissors")

        ||

        (playerChoice === "paper" &&
        computerChoice === "rock")

        ||

        (playerChoice === "scissors" &&
        computerChoice === "paper")
    ){

        resultText = "Win";
        wins++;

        document.getElementById("result")
            .style.color = "green";
    }

    else{

        resultText = "Lose";
        losses++;

        document.getElementById("result")
            .style.color = "red";
    }

    document.getElementById("result").innerHTML =
        "You " + resultText + "!";

    document.getElementById("wins").innerHTML =
        wins;

    document.getElementById("losses").innerHTML =
        losses;

    document.getElementById("draws").innerHTML =
        draws;

    results.push(resultText);

    round++;

    document.getElementById("history").innerHTML +=
        "<tr>" +
        "<td>" + round + "</td>" +
        "<td>" + playerChoice + "</td>" +
        "<td>" + computerChoice + "</td>" +
        "<td>" + resultText + "</td>" +
        "</tr>";
}

// Show Summary

function showSummary(){

    let totalWins = 0;

    for(let i = 0; i < results.length; i++){

        if(results[i] === "Win"){
            totalWins++;
        }
    }

    let totalRounds =
        results.length;

    if(totalRounds === 0){
        alert("No rounds played yet.");
        return;
    }

    let percentage =
        Math.round(
            (totalWins / totalRounds) * 100
        );

    alert(
        "You played " +
        totalRounds +
        " rounds and won " +
        percentage +
        "%."
    );
}

// Reset Game

function resetGame(){

    wins = 0;
    losses = 0;
    draws = 0;
    round = 0;

    results = [];

    gameStarted = false;

    // Clear player name
    document.getElementById("playerName").value = "";

    document.getElementById("wins").innerHTML = 0;
    document.getElementById("losses").innerHTML = 0;
    document.getElementById("draws").innerHTML = 0;

    document.getElementById("result").innerHTML = "";

    document.getElementById("history").innerHTML =
        "<tr>" +
        "<th>Round</th>" +
        "<th>You</th>" +
        "<th>Computer</th>" +
        "<th>Result</th>" +
        "</tr>";

    document.getElementById("playerImg").src =
        "rock.png";

    document.getElementById("computerImg").src =
        "rock.png";

    document.getElementById("startTime").innerHTML = "";
}