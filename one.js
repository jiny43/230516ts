var a = 1;
var b = 2;
function c(a, b) {
  if(Number.isInteger(a) && Number.isInteger(b)){
    return a + b;
}else {ㄴ
  new Error("정수를 내놔라");
}
}
console.log(c("a", b));
