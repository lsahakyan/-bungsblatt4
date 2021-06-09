
//Exercise 1. Print the count of the digits of a given number.


let strNumber = prompt("Please enter a number")
let count = 0
for (let i = 0; i < strNumber.length; i++){
    count = count + 1
}
console.log(count)


// Exercise 2. Count count of 9 in a number.

let count = 0
let number = +prompt("Enter a number")
while (number != 0){
    let lastDigit = number%10
    number = (number - lastDigit)/10
    if (lastDigit === 9) {
        count = count + 1
    }
}
console.log(count)

//Exercise 3. Given two numbers, print powers of two between them.

number1 = +prompt("Enter a number")
number2 = +prompt("Enter a number")
let mult = 1
let result = ""
while (mult <= number2){
    if (mult >= number1) {
        result += " "+ mult
    }
    mult = mult * 2

}
console.log(result)

//Exercise 4. Insert a number, print yes if it contains three successive zeros, otherwise no.

let areThereThreeZeros = false
let strNumber = prompt("Please enter a number")
for ( let i = 0; i < strNumber.length -2; i++){
    if (strNumber[i] == strNumber[i+1] == strNumber[i+2] == 0) {
        areThereThreeZeros = true
        break
    }
}

if(areThereThreeZeros === true){
    console.log("yes")
}else{
    console.log("no")
}


// Exercise 5. Insert two postive n and m integers between 1 and 10. Compute and print n power m.

let digit1 = +prompt("Enter a digit")
let digit2 = +prompt("Enter a digit")
let result = 1
for( let i = 1; i <= digit2; i++){
result = result*digit1
}
console.log(result)


