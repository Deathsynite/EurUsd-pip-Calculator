const accountEl = document.getElementById("account-el")
const riskEl = document.getElementById("risk-el")
const pipsEl = document.getElementById("pips-el")
function save() {
    saved1 = accountEl.value
    saved2 = riskEl.value
    localStorage.setItem("myInputValue", saved1);
    localStorage.setItem("myInputValue2", saved2);
}