function oscars(input){
    let actorName = String(input[0]);
    let startingPoints = Number(input[1]);
    let numberOfAssessors = Number(input[2]);

    let allPoints = 0;

    for (let idx = 3; idx < input.length; idx = idx + 2 ){
        let name = String (input[idx].length);
        let point = Number (input [idx + 1]);
        let pointPerMember = (name * point) / 2;
            allPoints += pointPerMember;
            if (idx === 3) {
                allPoints += startingPoints;
            }
            if (allPoints > 1250.5) {
                console.log (`Congratulations, ${actorName} got a nominee for leading role with ${allPoints.toFixed (1)}!`);
                break;
        }
    }
    if (allPoints <= 1250.5) {
    let diff = 1250.5 - allPoints;
    console.log (`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);
    }
}
oscars(["Zahari Baharov","205","4","Johnny Depp","45","Will Smith","29","Jet Lee","10","Matthew Mcconaughey","39"]);