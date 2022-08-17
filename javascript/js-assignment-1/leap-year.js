
function isLeap(year) {
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        console.log(year + " Is A Leap Year");
    }
    else {
        console.log(year + " Is Not A Leap Year");
    }
}

isLeap(2022);