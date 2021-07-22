function getResult(a, b, c) {
    // код для задачи №1 писать здесь
    "use strict";
    if(a == 0)
  //  let nol = false;
    return false;
    let res = {};
    let D = b * b - 4 * a * c;
    console.log('D = ' + D);
    if(D < 0)
    return false;
    res['discriminant'] = D;
    if(D == 0)
    res["quadratic roots"] = (-b + Math.sqrt(D)) / (2 * a);
    else if(D > 0){
    let tmp = [];
    tmp.push((-b + Math.sqrt(D)) / (2 * a));
    tmp.push((-b - Math.sqrt(D)) / (2 * a));
    res["quadratic roots"] = tmp;
    }
return res;
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name, dateOfBirthday) {
    // код для задачи №3 писать здесь
    // return result;
}