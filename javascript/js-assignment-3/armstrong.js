var num = 153;
var temp = num;
var res  = 0;
while(temp>0) {
    var remain = temp%10;
    res += remain * remain * remain;

    temp = parseInt(temp/10);
};

if(res == num) {
    console.log("armstrong number");
}
else {
    console.log("not a armstrong number");
}