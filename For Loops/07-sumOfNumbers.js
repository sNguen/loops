function sumOfNumbers(input){
let numAsString = String(input[0]); //1234.toString()   //   "" + 1234 = "1234"
let sum = 0;

for(let i = 0; i < numAsString.length; i++){
    let num = Number(numAsString[i]);
    sum += num;

}
console.log(`The sum of the digits is:${sum}`)
}
sumOfNumbers(['1234'])
