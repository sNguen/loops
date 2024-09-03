function histogram(input){
let n = Number(input[0]);

let group1count = 0;
let group2count = 0;
let group3count = 0;
let group4count = 0;
let group5count = 0;

for(let inx = 1; inx <= n; inx++){
    let num = Number(input[inx]);

    if (num < 200){
        group1count++
    }else if(num <= 399){
        group2count++;
    }else if(num <= 599){
        group3count++;
    }else if(num <= 799){
        group4count++;
    }else{
        group5count++;
    }
}

let group1countPercent = group1count / n * 100;
let group2countPercent = group2count / n * 100;
let group3countPercent = group3count / n * 100;
let group4countPercent = group4count / n * 100;
let group5countPercent = group5count / n * 100;


console.log(`${group1countPercent.toFixed(2)}%`);
console.log(`${group2countPercent.toFixed(2)}%`);
console.log(`${group3countPercent.toFixed(2)}%`);
console.log(`${group4countPercent.toFixed(2)}%`);
console.log(`${group5countPercent.toFixed(2)}%`);

}
histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);
