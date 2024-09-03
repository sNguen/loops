function cleverLili(input){
    let liliAge = Number(input[0]);
    let washingMashinePrice = Number(input[1]);
    let pricePerToy = Number(input[2]);

    let moneySaved = 0;
    let moneyGifted = 10;

    for (let birthday = 1; birthday <= liliAge; birthday++){
        if(birthday % 2 === 0){
            moneySaved += moneyGifted - 1;
            moneyGifted += 10;
        }else{
            moneySaved += pricePerToy;
        }

    }
    if (moneySaved >= washingMashinePrice){
        console.log(`Yes! ${(moneySaved -= washingMashinePrice).toFixed(2)}`);
    }else{
        console.log(`No! ${(washingMashinePrice-moneySaved).toFixed(2)}`);
    }
    }


cleverLili(["10",

"30000.00",

"6"]);