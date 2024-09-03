function timePlus15Minutes (input){
let hours = Number(input[0]);
let minutes = Number(input[1]);

let timeInMinutes = hours * 60 + minutes + 15;
let newHours = Math.floor(timeInMinutes / 60);
let newMintues = timeInMinutes % 60;

if (newHours === 24){
    newHours = 0;
}

if (newMintues >= 10){
    console.log(`${newHours}:${newMintues}`)
}else{
    console.log(`${newHours}:0${newMintues}`)
}
}
timePlus15Minutes(["23", "59"]);