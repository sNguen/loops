
function shopping (input){
    let petersBuget = Number(input[0]);
    let numberVideoCards = Number(input[1]);
    let numberProcesors = Number(input[2]);
    let numberRam = Number(input[3]);

    let priceVideoCards = numberVideoCards * 250;
    let priceProcesors = numberProcesors * (0.35 * priceVideoCards);
    let priceRam = numberRam * (0.10 * priceVideoCards);
    let totalPrice = priceVideoCards + priceProcesors + priceRam;

    if (numberVideoCards > numberProcesors){
        totalPrice *= 0.85;
    }
    if (totalPrice <= petersBuget){
        let moneyLeft = petersBuget - totalPrice;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    }else{
        let moneyNeeded = totalPrice - petersBuget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
    }
     
}
shopping(["900", "2", "1", "3"]);