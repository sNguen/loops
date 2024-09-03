function trekkingMania (input){
    let countGroups = Number(input[0]);
    let musala = 0;
    let montBlanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    
    for (idx = 1; idx <= countGroups; idx++){
        let alpinist = Number(input[idx])
        if (alpinist <= 5){
            musala += alpinist; 
        }else if(alpinist >= 6 && alpinist <= 12 ){
            montBlanc += alpinist;
        }else if(alpinist >= 13  && alpinist <= 25){
            kilimanjaro += alpinist;
        }else if(alpinist >= 26  && alpinist <= 40 ){
            k2 += alpinist;
        }else{
            everest += alpinist;
        }
       
    }

    let allAlpinist = musala + montBlanc + kilimanjaro + k2 + everest;
    let percentMusala = musala / allAlpinist * 100;
    let percentMontBlanc = montBlanc / allAlpinist * 100;
    let percentKilimanjaro = kilimanjaro / allAlpinist * 100;
    let percentK2 = k2 / allAlpinist * 100;
    let percentEverest = everest / allAlpinist * 100;
        
    console.log(`${percentMusala.toFixed(2)}%`);
    console.log(`${percentMontBlanc.toFixed(2)}%`);
    console.log(`${percentKilimanjaro.toFixed(2)}%`);
    console.log(`${percentK2.toFixed(2)}%`);
    console.log(`${percentEverest.toFixed(2)}%`);
   
}
trekkingMania(["10","10","5","1","100","12", "26", "17", "37", "40", "78"]);