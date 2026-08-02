let balance = 5000;

// Deposit
document.getElementById("deposit").addEventListener("click", function(){

    let amount = Number(document.getElementById("amount").value);

    if(document.getElementById("amount").value==""){
        document.getElementById("result").innerHTML="Please enter amount.";
    }
    else if(amount<=0){
        document.getElementById("result").innerHTML="Enter valid amount.";
    }
    else{

        balance = balance + amount;

        document.getElementById("result").innerHTML=
        "Amount Deposited : " + amount +
        "<br>Current Balance : " + balance;

    }

});


// Withdraw
document.getElementById("withdraw").addEventListener("click", function(){

    let amount = Number(document.getElementById("amount").value);

    if(document.getElementById("amount").value==""){
        document.getElementById("result").innerHTML="Please enter amount.";
    }
    else if(amount<=0){
        document.getElementById("result").innerHTML="Enter valid amount.";
    }
    else if(amount>balance){

        document.getElementById("result").innerHTML="Insufficient Balance!";

    }
    else{

        balance = balance - amount;

        document.getElementById("result").innerHTML=
        "Amount Withdrawn : " + amount +
        "<br>Current Balance : " + balance;

    }

});


// Check Balance
document.getElementById("balance").addEventListener("click", function(){

    document.getElementById("result").innerHTML=
    "Current Balance : " + balance;

});


// Clear
document.getElementById("clear").addEventListener("click", function(){

    document.getElementById("amount").value="";
    document.getElementById("result").innerHTML="";

});
