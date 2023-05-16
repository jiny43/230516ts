"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var module_file_1 = require("./module-file");
var jieun_1 = require("./jieun");
(0, jieun_1.jieun)("안녕하세요");
console.log(module_file_1.data);
var a = 1;
var b = 2;
function moreFunction() {
    console.log('hi');
}
//void 리턴이 없다 ->실행함수(코드를 안봐도 된다.)
function c(a, b) {
    return a + b;
}
console.log(c(a, b));
