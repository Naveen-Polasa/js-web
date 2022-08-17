function facto(num) {
    var sum = 1;
    for(var i=2; i<=num; i++) {
        sum *= i;
    }
    console.log(sum);
}

facto(6);