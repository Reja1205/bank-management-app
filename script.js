const logInBtn = document.getElementById("loginBtn");

logInBtn.addEventListener("click", function () {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const emailValue = emailInput.value;
  const passwordInputlValue = emailInput.value;

  if (emailValue && passwordInputlValue) {
    const logInArea = document.getElementById("login-area");
    logInArea.style.display = "none";

    const transectionArea = document.getElementById("transection-area");
    transectionArea.style.display = "block";
  } else {
    alert("Please Fill Out Input Field");
  }

  let balance = 0;

  function updateBalance() {
    document.getElementById("balance").innerText = balance;
  }

  function myDeposit() {
    const myAmount = parseFloat(
      document.getElementById("deposit-amount").value
    );

    if (isNaN(myAmount) || myAmount < 0) {
      alert("Enter a valid number");
      return;
    }
    balance = balance + myAmount;
    updateBalance();
  }

  function myWithdraw() {
    const myAmount = parseFloat(
      document.getElementById("withdraw-amount").value
    );

    if (myAmount > balance) {
      alert("Insufficient Balance");
      return;
    }
    balance = balance - myAmount;
    updateBalance();
  }

  const depositBtn = document.getElementById("depositBtn");
  depositBtn.addEventListener("click", () => {
    myDeposit();
  });
  const withdrawtBtn = document.getElementById("withdrawBtn");
  withdrawtBtn.addEventListener("click", () => {
    myWithdraw();
  });
});
