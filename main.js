let userInput = document.getElementById('identity-check');
let submitBtn = document.getElementById('checkBtn');
let warningBox = document.querySelector('.warning');

submitBtn.addEventListener('click', function() {
    validation();
});

userInput.addEventListener('keyup', function(event) {
    if (event.key == "Enter") {
        validation();
    }
});

function validation() {
    if (userInput.value[0] == 0) {
        warningBox.textContent = "Identity Numbers Can't Start With a Zero!";
        invalid();
    } else if (userInput.value.includes('.')) {
        warningBox.textContent = "Identity Numbers Can't Include Dots!";
        invalid();
    } else if (isNaN(userInput.value)) {
        warningBox.textContent = "Identity Numbers Must Not Contain Letters or Symbols!";
        invalid();
    } else if (userInput.value.length <= 10) {
        warningBox.textContent = "Identity Numbers Must Have 11 Digits!";
        invalid();
    } else {
        finalcheck();
    };
    userInput.value = '';
};

function finalcheck() {
    let idNumber = userInput.value.split('');
    let oddTotal = 0;
    let evenTotal = 0;
    let digitsTotal = 0;
        
    for (let i = 0; i <= 9; i += 2) {
        oddTotal += parseInt(idNumber[i]);
    };
    for (let i = 1; i <= 8; i += 2) {
        evenTotal += parseInt(idNumber[i]);
    };


    let finalCalc = ((oddTotal * 7) - evenTotal) % 10;
    if (finalCalc == idNumber[9]) {
        for (let i = 0; i <= 9; i++) {
            digitsTotal += parseInt(idNumber[i]);
        };
        if (digitsTotal % 10 == idNumber[10]) {
            warningBox.textContent = `${userInput.value} Is a Valid Identity Number.`;
            warningBox.style.background = "blue";
            warningBox.style.display = "block";
        } else {
            warningBox.textContent = `${userInput.value} Is Not a Valid Identity Number!`;
            invalid();
        }
    } else {
        warningBox.textContent = `${userInput.value} Is Not a Valid Identity Number!`;
        invalid();
    };
};

function invalid() {
    warningBox.style.background = "red";
    warningBox.style.display = "block";
};