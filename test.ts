const a = 1;
const b = 2;

function moreFunction():void{
  console.log('hi');
}
//void 리턴이 없다 ->실행함수(코드를 안봐도 된다.)
function c(a:number,b:number) : number{
  return a+b;
}

console.log(c(a,b));
