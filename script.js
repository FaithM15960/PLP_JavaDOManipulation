// ==============================
// Part 1: Variables & Conditionals
// ==============================
function checkAge() {
    const age = document.getElementById('age').value;
    const result = document.getElementById('ageResult');

    if(age === "") {
        result.textContent = "Please enter your age.";
    } else if(age >= 18) {
        result.textContent = "You are an adult.";
    } else {
        result.textContent = "You are a minor.";
    }
}

// ==============================
// Part 2: Functions
// ==============================
function sumNumbers() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const result = document.getElementById('sumResult');

    // Custom function to calculate sum
    result.textContent = `Sum: ${add(num1, num2)}`;
}

// Reusable function
function add(a, b) {
    return a + b;
}

// Toggle background color using a function
function toggleBackground() {
    const body = document.body;
    if(body.style.backgroundColor === "lightyellow") {
        body.style.backgroundColor = "white";
    } else {
        body.style.backgroundColor = "lightyellow";
    }
}

// ==============================
// Part 3: Loops
// ==============================
function listNumbers() {
    const list = document.getElementById('numberList');
    list.innerHTML = ""; // Clear previous items

    for(let i = 1; i <= 10; i++) {
        const li = document.createElement('li');
        li.textContent = `Number ${i}`;
        list.appendChild(li);
    }
}

function countdown() {
    const result = document.getElementById('countdownResult');
    result.textContent = "";

    let i = 5;
    while(i > 0) {
        result.textContent += i + " ";
        i--;
    }
    result.textContent += "Blast off!";
}

// ==============================
// Part 4: DOM Manipulation
// ==============================
function addNewItem() {
    const list = document.getElementById('dynamicList');
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(newItem);
}
