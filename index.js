
let rules =  ["가위","바위","보"]
 //가위는 주먹한테 지고 보자기는 이긴다
    //바위는 보자기한테 지고 가위는 이긴다
    //보는 가위한테 지고 주먹한테 이긴다.
function GamBamBo(me, you) {
    if (me === rules[0] && you === rules[1]) {
        return "당신이 졌습니다.";
    }
    else if (me === rules[0] && you === rules[2]) {
        return "당신이 이겼습니다";
    }
    else if (me ===rules[0] && you === rules[0]) {
        return "비겼습니다.";
    }
    else if (me ===rules[1] && you=== rules[0]) {
        return "당신이 졌습니다.";
    }
    else if (me ===rules[1] && you === rules[1]) {
        return "비겼습니다.";
    }
    else if (me ===rules[1] && you === rules[2]) {
        return "당신이 이겼습니다";
    }
    else if (me ===rules[2] && you=== rules[0]) {
        return "당신이 이겼습니다";
    }
    else if (me ===rules[2] && you === rules[1]) {
        return "당신이 졌습니다.";
    }
    else if (me ===rules[2] && you === rules[2]) {
        return "비겼습니다.";
}
}
console.log(GamBamBo('보', '가위'));
//랜덤으로 a,b,c 를 뽑아주자

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
console.log(randomNumber(0,3));

console.log(GamBamBo(rules[randomNumber(0,3)],rules[randomNumber(0,3)]));

