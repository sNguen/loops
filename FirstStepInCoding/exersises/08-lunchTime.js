function lunchTime (input){
let serialTitle = input[0];
let serialDuration = Number(input[1]);
let breakDuration = Number(input[2]);

let lunchDurarion = (1/8) * breakDuration;
let restDuartion = (1/4) * breakDuration;

let freeTime = breakDuration - lunchDurarion - restDuartion;

if (freeTime >= serialDuration){
    let timeLeft = freeTime - serialDuration;
    console.log(`You have enough time to watch ${serialTitle} and left with ${Math.ceil(timeLeft)} minutes free time.`)
}else{
    let timeNeeded = serialDuration - freeTime;
    console.log(`You don't have enough time to watch ${serialTitle}, you need ${Math.ceil(timeNeeded)} more minutes.`)
}

}
lunchTime(["Game of Thrones", "60", "96"]);