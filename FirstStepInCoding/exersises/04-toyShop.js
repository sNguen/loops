function toyShop (input){
let excursionPrice = Number(input[0]);
let puzzles = Number(input[1]);
let speakingDoll = Number(input[2]);
let plushBears = Number(input[3]);
let minions = Number(input[4]);
let trucks = Number(input[5]);


let moneyEarned = (puzzles * 2.6) + (speakingDoll * 3) + (plushBears * 4.10) + (minions * 8.20) + (trucks * 2);
let totalCountToys = puzzles + speakingDoll + plushBears + minions + trucks;

if (totalCountToys >= 50){
moneyEarned *= 0.75;
}
moneyEarned  *= 0.9;

if (moneyEarned >= excursionPrice) {
    let moneyLeft = moneyEarned - excursionPrice;
console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.` );
}else {
    let enoughMoney = excursionPrice - moneyEarned;
    console.log(`Not enough money! ${enoughMoney.toFixed(2)} lv needed.`);
}

}
toyShop (["320", "8", "2", "5", "5", "1"]);