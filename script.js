$("#calc_result").click(function result(){
  const jwepDmg = document.getElementById("wepDmg").value;
  //
  let allDmgArray = new Array();
  $("input[name=allDmg]").each(function() {
    allDmgArray.Push($(this).val());
  });

  let calcADresult = 0;
  $("allDmgArray").each(function(){
    calcADresult += 1 + 0.01 * allDmgArray;
  })
  const jallDmg = calcADresult;
//
  const jresult = jwepDmg * jallDmg;
  $("#result").html(~~jresult);
});

$(function() {
  let addCount = 1;
  $("#addAllDmg").click(function(){
    if(addCount <= 15){
     $('#addAllDmgArea').append('<input type="number" name="allDmg" value="0">');
     addCount++;
    }
  });
  
});

$(function(){
  
})
