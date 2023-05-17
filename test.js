// function first(arrayData){
//   //1. 첫번째 배열 인덱스의 값을 변환하는 함수를 만들고 싶다.
//   let result = arrayData[0];
//   result = "다른 값";
//   let arr = arrayData.unshift(result);
//   return arr;
// }
// let data = ["최대건","정성철","허진","이세민"];
// first(data); 
//*매개변수를 배열로 받을 예정
//* typeof(arrayData) === string
function first(arrayData) {
    //todo 첫번째 배열 인덱스의 값을 변환하는 함수를 만들고 싶다.
    var result = "강지민";
    var arr = [];
    arr.unshift(result);
    //unshift 배열 앞에 넣겠다 
    return arr;
}
var data = ["최대건", "정성철", "허진", "이세민"];
console.log(first(data));
