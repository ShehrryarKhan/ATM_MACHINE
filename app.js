

let moneyBox = 22000; //ATM MACHINE MONEY BOX
let cardDailyLimit = 20000;
let accountBalance = 50000;

function checkPin() {
    console.log("I am checking pin");

    let userInputPin = document.querySelector("#userInputPin").value;

    if (userInputPin.length > 4) {
        document.querySelector("#errorMessage").innerHTML =
            "You Must Enter 4 Digit Pin Number";
        return;
    }

    else if (userInputPin.length < 4) {
        document.querySelector("#errorMessage").innerHTML =
            "You Must Enter 4 Digit Pin Number";
        return;
    }
    else if (userInputPin !== "3333") {
        document.querySelector("#errorMessage").innerHTML =
            "inCorrect Pin Number ❌";
        return;
    }

    else if (userInputPin === "3333") {
        document.querySelector("#errorMessage").innerHTML =
            "Correct Pin Number 👍";
        document.querySelector("#homeScreen").innerHTML = `
        
        <form onsubmit ="withdraw(); return false">
        Enter your amount to withdraw:
        <input type="number" id="userInputAmount" required>
        <button onclick="withdraw()">withdraw</button>
        `

        return;

    }


}


function withdraw() {

    console.log("Withdraw funtion running...");

    let withdrawAmount = +document.querySelector("#userInputAmount").value;
    // console.log("withdraw amount is ", withdrawAmount);

    console.log(withdrawAmount);

    if (withdrawAmount > moneyBox) {
        document.querySelector("#message").innerHTML= `This machine don't have enough money, please try smaller amount`
        return;
    }
    else if (withdrawAmount > cardDailyLimit) {
        document.querySelector("#message").innerHTML = `Daily card limit is Rs.20000, please enter under Daily card limit amount.`
        return;
    }
    else if (withdrawAmount > accountBalance) {
        document.querySelector("#message").innerHTML = `Your account balance ${accountBalance} is less than your withdrawal amount.`
        return;
    }
    else if (withdrawAmount < 500) {
        document.querySelector("#message").innerHTML = `Please enter more than 500rs.`
        return;
    }
    else if (withdrawAmount % 500) {
        document.querySelector("#message").innerHTML = `Please Enter 500 multiply means 500, 1000, 1500, 2000 etc`
        return;
    }
    else {

        document.querySelector("#message").innerHTML = `Withdraw has been Done successfully 🎉`
        
        document.querySelector("#ul").style = "block" ;

        moneyBox = moneyBox - withdrawAmount;
        cardDailyLimit = cardDailyLimit - withdrawAmount;
        accountBalance = accountBalance - withdrawAmount;

        console.log(moneyBox, cardDailyLimit, accountBalance);

        document.getElementById("moneyBox").innerHTML = moneyBox;
        document.getElementById("cardDailyLimit").innerHTML = cardDailyLimit;
        document.getElementById("accountBalance").innerHTML = accountBalance;
        return;
    }


}


