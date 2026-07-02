let balance = 0;

const balanceDisplay = document.getElementById("balance");
const historyList = document.getElementById("historyList");

function updateBalance() {
    balanceDisplay.innerText = "₹" + balance;
}

function addHistory(message) {
    const li = document.createElement("li");
    li.innerText = message;
    historyList.prepend(li);
}

function deposit() {

    let amount = Number(document.getElementById("amount").value);

    if(amount <= 0){
        alert("Enter a valid amount");
        return;
    }

    balance += amount;

    updateBalance();

    addHistory("✅ Deposited ₹" + amount);

    document.getElementById("amount").value="";
}

function withdraw(){

    let amount = Number(document.getElementById("amount").value);

    if(amount <= 0){
        alert("Enter a valid amount");
        return;
    }

    if(amount > balance){
        alert("Insufficient Balance!");
        return;
    }

    balance -= amount;

    updateBalance();

    addHistory("❌ Withdrawn ₹" + amount);

    document.getElementById("amount").value="";
}

function checkBalance(){

    alert("Current Balance : ₹" + balance);

    addHistory("💰 Balance Checked : ₹" + balance);

}

updateBalance();
