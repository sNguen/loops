function worldSwimmingRecord (input){
let recordInSeconds = Number(input[0]);
let distanceInMeters = Number(input[1]);
let secondsForMeter = Number(input[2]);

let ivanTime = (distanceInMeters * secondsForMeter);
let delayTime = Math.floor((distanceInMeters / 15)) * 12.5;
let totalIvanTime = ivanTime + delayTime;

if (recordInSeconds <= totalIvanTime){
    let timeNeeded = totalIvanTime - recordInSeconds;
    console.log(`No, he failed! He was ${timeNeeded.toFixed(2)} seconds slower.`);
}else{
    console.log(`Yes, he succeeded! The new world record is ${totalIvanTime.toFixed(2)} seconds.`);
}

}
worldSwimmingRecord (["10464",

"1500",

"20"]);