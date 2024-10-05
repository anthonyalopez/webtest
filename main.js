function rps(){
    var number = Math.floor(Math.random() * 4);
    var choice = document.getElementById("choice").value;
    var computerChoice = "";
    if (number === 0){
        computerChoice = "Rock"
    }
    else if (number === 1){
        computerChoice = "Paper"
    }
    else if (number === 2){
        computerChoice = "Scissors"
    }
    else if (number === 3){
        computerChoice = "Spock"
    }

    document.getElementById("user").innerHTML = choice;
    document.getElementById("computer").innerHTML = computerChoice;

    if (choice == computerChoice) {
        alert("Tie");
        document.body.style.backgroundColor = "Blue";
    } else if (computerChoice == "Spock" || (choice === "Rock" && computerChoice === "Paper") || (choice === "Paper" && computerChoice === "Scissors") || (choice === "Scissors" && computerChoice === "Rock")) {
        alert("You Lose");
        document.body.style.backgroundColor = "Red";
    } else {
        alert("You Win");
        document.body.style.backgroundColor = "Green";
    }

    return false;
}

function checkTextBox(){
    var textBox = document.getElementById('concern').value;
    var specialCharacter = /[^a-zA-Z0-9\s]/;
    if(specialCharacter.test(textBox)) {
        alert('Invalid, cannot have a special character');
        return false;
    }
    return true;
}

function redirect(){
    if(document.body.id === "success")
    setTimeout(function() { 
        window.location.href = "./index.html";
    }, 5000);
}

redirect();