let Sum = 0;

function PlusOne() {
  Sum = Sum + 1;
  if (Sum>100) {Sum = 100};
  $("#pb1").css("width",Sum+"%");
  $("#sum_proc").text(Sum+"%"); 
}

function PlusThree() {
  Sum = Sum + 3;
  if (Sum>100) {Sum = 100};
  $("#pb1").css("width",Sum+"%");
  $("#sum_proc").text(Sum+"%"); 
}

function PlusSeven() {   
  Sum = Sum + 7;
  if (Sum>100) {Sum = 100};
  $("#pb1").css("width",Sum+"%");
  $("#sum_proc").text(Sum+"%"); 
}

function init() { 
  $("#btn1").click(PlusOne);
  $("#btn2").click(PlusThree);
  $("#btn3").click(PlusSeven);
  console.log('Загрузилось');
}

$(document).ready(init);