function salary(input){
    let openTabs = Number(input[0]);
    let salary = Number(input[1]);

    for (let idx = 2; idx < input.length; idx++){
        let res = input[idx];

        if (res === 'Facebook'){
            salary -= 150;
        }else if (res === 'Instagram'){
            salary -= 100;
        }else if (res === 'Reddit'){
            salary -= 50;
        }
    }
    if (salary <= 0){
        console.log('You have lost your salary.')
    }else{
        console.log(Math.abs(salary));
    }

}
salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);