let maximum = parseInt(prompt("Enter the Maximum Number!")); 

while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number.")); 
};

const targetNum = Math.floor(Math.random() * maximum + 1); 
console.log(targetNum);

let guess = parseInt(prompt("enter your first guess")); 

let attempts = 1; 

while (parseInt(guess !== targetNum)) {
    if (guess === "q") break; 
    attempts++; 
    if (guess > targetNum) {
        guess = prompt("Too high! enter a new guess.");
    } else {
        guess = prompt("Too low! enter a new guess"); 
    } 
}
if (guess === 'q') {
    console.log("Okay - bye"); 
} else {
    console.log("Correct You Win!"); 
    console.log(`You got it in ${attempts} attempts!`)
}