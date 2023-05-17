// function first(arrayData){
//   //1. 첫번째 배열 인덱스의 값을 변환하는 함수를 만들고 싶다.
//   let result = arrayData[0];
//   result = "다른 값";
//   let arr = arrayData.unshift(result);
//   return arr;

// }

// let data = ["최대건","정성철","허진","이세민"];

// first(data); 

// //*매개변수를 배열로 받을 예정
// //* typeof(arrayData) === string
// function first(arrayData:string[]): string[]{
//   //todo 첫번째 배열 인덱스의 값을 변환하는 함수를 만들고 싶다.
//   let result : string = "강지민";
//   let arr:string[] = [];
//   arr.unshift(result);
//   //unshift 배열 앞에 넣겠다 
//   return arr;
//   //* 기존배열에 0번째를 최종적으로 바꿔주는 형태
//   //* ...전개연산자
//   //* reduce()
//   //* map()
//   //* push()

// }

// let data = ["최대건","정성철","허진","이세민"];
// console.log(first(data)); 

//------------
/**
 * @params{array} arrayData
 * @params{string} insertData
 * @return {array} 문자열로 된 배열입니다.
 * 대건씨 안미안해요
 * 
 *   */  






function first(arrayData:string[],insertString:string) : string[]{

arrayData.pop();
let combineArray : string[] = [];
combineArray = [insertString,...arrayData];

  
  //unshift 배열 앞에 넣겠다 
  return combineArray;
 
}

let data = ["최대건","정성철","허진","이세민"];

console.log(first(data,"공욱재")); 
console.log()