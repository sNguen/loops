function calculateBonusPoints (input){
let initialPoins = Number(input[0]);
let bonusPoints = 0;
if (initialPoins <= 100){
    bonusPoints = 5;
}else if (initialPoins <= 1000){
    bonusPoints = 0.2 * initialPoins;
}
else {
    bonusPoints = 0.1 * initialPoins;
}
if (initialPoins % 2 === 0){
    bonusPoints += 1;
}else if (initialPoins % 10 === 5){ 
    bonusPoints += 2;
}
console.log (bonusPoints);
console.log (initialPoins + bonusPoints);

}
calculateBonusPoints(["20"]);