var facto = 1;

function isPrime(num) {
    if(num == 1) {
        return false;
    }
    for(var j = 2; j<num; j++) {
        if(num%j==0) {
            return false;
        }
    }
    return true;
}

function prime(x, y) {
    for(var i = x; i<=y; i++) {
       if(isPrime(i)==true) {
        for(var k = 1; k<=i; k++) {
            facto*=k;
        }
        console.log("Factorial Of Prime Number " + i + " is " + facto);
       }
    }
}

prime(1,12);
