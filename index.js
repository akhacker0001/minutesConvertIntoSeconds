

var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
document.querySelector("button").addEventListener("click",function(){
    var inputValue = input1.value;
    var seconds = inputValue*60;
    if (inputValue>0) {
        input2.value = seconds + "  seconds" ;
    }else{
         var inputValue2 = input2.value;
         var minutes = inputValue2/60;
         input1.value = minutes.toFixed(2) + "  minutes";
    }
  
  
})





// function converter(){
//     var a = b
//     var

// }
