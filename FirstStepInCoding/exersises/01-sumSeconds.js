function sumSeconds (input){
let time1 = Number(input[0]);
let time2 = Number(input[1]);
let time3 = Number(input[2]);

let timeInSeconds = time1 + time2 + time3;

let minutes = Math.floor(timeInSeconds / 60);
let seconds = timeInSeconds % 60;

if (seconds >= 10){
    console.log(`${minutes}:${seconds}`);
}else{
    console.log(`${minutes}:0${seconds}`);
}
}
sumSeconds (["35","45","44"]);