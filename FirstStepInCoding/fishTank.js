function fishTank (input){
let lenght = Number(input[0]);
let width = Number(input[1]);
let height = Number(input[2]);
let percent = Number(input[3]) / 100;

let tankVolume = lenght * width * height;
let volumeLiters = tankVolume / 1000;
let neededLiters = volumeLiters * (1 - percent);

console.log (neededLiters);


}
fishTank (["85 ","75 ","47 ","17 "]);