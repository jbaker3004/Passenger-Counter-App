// DEALING WITH JS VARIABLES
// let firstBatch = 5  // JavaScript VARIABLE - use "let" to create a variable
// let secondBatch = 6
// let count = firstBatch + secondBatch >>> JS varaible can refer to other variables
//let ape = 7 + 2 >>> Can use javascript as a calculator. Lots of math operations built into javascript.

// HUMAN YR VS DOG YR CALCULATOR
// let myAge = 29
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// REASSIGNING VARIABLES
// let count = 5
// count = 3   >>>> this will reassign the count variable to the number 3!

// ADDING TO COUNT WITH FORMULA >> reassigning a variable to take on new variable.
let count = 0
// count = count + 1

// LISTENING FOR CLICKS ON A BUTTON
// Can do this in HTML using >>>  onclick="[function]". The function is a javascript function which you create in your javascript. 
let countEl = document.getElementById("count-el")

function increment(){
    count += 1
    countEl.innerText = count
}

// DOCUMENT OBJECT MODEL ("The DOM")
// How to use javascript to modify a website. 
//  1. Document = HTML document
//  2. Object = data type of HTML. You've taken HTML and put it into JS object
//  3. Model = Representation of the HTML element you are bringing into JS

// GREETING MESSAGE ON SITE (and use emoji!)
let welcomeEl = document.getElementById("welcome-el")
let firstName = "James"
let greeting = "Welcome back to the platform, "
welcomeEl.textContent = greeting + firstName + String.fromCodePoint(0x1F44B)

// BUILD A SAVE BUTTON, SET SAVE FUNCTION, AND SET COUNTER BACK TO ZERO WHEN CLICK SAVE
let saveEl = document.getElementById("save-el")
function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
}


// QUICKFIRE CHALLENGES
// 1: Variables and concatenate
let firstName = "James"
let lastName = "Baker"
let fullName = firstName + " " + lastName

// 2: Concatenate variables in function
let lindaName = "Linda"
let greeting = "Hi there"

function messageGreeting(){
    greeting + ", " + lindaName + "!"
}

// 3: Incrementing and decrementing skills
let myPoints = 3
function add3Points(){
    myPoints += 3
}
function remove1Point(){
    myPoints -= 1
}

// 4: Render error paragraph.
// Within HTML on website, usually there will be an empty <p> with an id="error". This is so that in JS you can create a function to send an error message if something goes wrong.
let errorParagraph = document.getElementById("error")

function purchase(){
    console.log("button clicked")
    errorParagraph.textContent = "Something went wrong, please try again"
}