function godzillaVsKong (input){
let movieBudget = Number(input[0]);
let extraPeople = Number(input[1]);
let clothesPricePerPerson = Number(input[2]);

let clothesPrice = extraPeople * clothesPricePerPerson;
let decorBudget = 0.1 * movieBudget;

if (extraPeople > 150){
    clothesPrice *= 0.9;
}
 let totalPrice = clothesPrice + decorBudget;

if (totalPrice > movieBudget){
    let moneyNeeded = totalPrice - movieBudget;
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
}else{
    let moneyLeft = movieBudget - totalPrice;
    console.log(`Action!`);
    console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);

}
}
godzillaVsKong (["15437.62","186","57.9"]);