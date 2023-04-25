const accountEl = document.getElementById("account-el");
const riskEl = document.getElementById("risk-el");
const pipsEl = document.getElementById("pips-el");
const lotsEl = document.getElementById("lot-size-el"); 
const saveBtn = document.getElementById("save-btn");
const clearBtn = document.getElementById("clear-btn");
let accountSize = localStorage.getItem("myInputValue");
let risk = localStorage.getItem("myInputValue2");
let pips = localStorage.getItem("myInputValue3");
console.log(accountSize);
saveBtn.addEventListener("click", save);
clearBtn.addEventListener("click", clear);
window.onload = function() {
    let savedValue1 = localStorage.getItem("myInputValue");
    let savedValue2 = localStorage.getItem("myInputValue2");
    if (savedValue1) {
        accountEl.value = savedValue1;
    }
    if (savedValue2) {
        riskEl.value = savedValue2;
    }
};

function save() {
    let saved1 = accountEl.value;
    let saved2 = riskEl.value;
    localStorage.setItem("myInputValue", saved1);
    localStorage.setItem("myInputValue2", saved2);
    calculateLotSize(); 
}

function clear() {
    accountEl.value = "";
    riskEl.value = "";
    pipsEl.value = ""; // Reset the pips input field
    localStorage.removeItem("myInputValue");
    localStorage.removeItem("myInputValue2");
    lotsEl.textContent = "Lots:"; // Reset the displayed lot size
}



function calculateLotSize() {
    let accountSize = parseFloat(accountEl.value);
    let risk = parseFloat(riskEl.value) / 100;
    let pipValue = 0.1; 
    let pips = parseFloat(pipsEl.value);

    let lotSize = (accountSize * (risk / 100)) / (pips * pipValue);
    return lotsEl.textContent = "Lots: " + lotSize.toFixed(2); 
}
