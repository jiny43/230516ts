function GamBamBo(me,you){
  let a ="가위"
  let b ="바위"
  let c ="보"
  if(me === a && you === b){
    return "당신이 졌습니다.";
  }else if(me === a && you === c){
    return "당신이 이겼습니다"
  }else if(me ===a && you ===a){
    return "비겼습니다.";
  }
  //가위는 주먹한테 지고 보자기는 이긴다
//바위는 보자기한테 지고 가위는 이긴다
//보는 가위한테 지고 주먹한테 이긴다.
}



console.log(GamBamBo('가위','바위'));