
// function plus(a:Number,b:Number):Number{
//   return a+b;
// }

// console.log(plus(1,2));

function exampleOne(object:object){
  let value :Array<string>=[];
  for (let key in object){
    value.push(key);
  }
  return value;
}

let test = {
  name: "Kongukjae",
  age: 20,
  job:"minam"
  
}

console.log(exampleOne(test));