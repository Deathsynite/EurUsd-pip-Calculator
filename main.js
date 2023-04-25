const accountEl = document.getElementById("account-el")
const riskEl = document.getElementById("risk-el")
const pipsEl = document.getElementById("pips-el")
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
  }

  function clear() {
    accountEl.value = "";
    riskEl.value = "";
    localStorage.removeItem("myInputValue");
    localStorage.removeItem("myInputValue2");
  }