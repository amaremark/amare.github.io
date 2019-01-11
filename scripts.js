// calling the element using DOM and assign a variable.

var Validate = function(Valore, rightanswer, form, span) {

  var formname = document.getElementById(form)
  var spanname = document.getElementById(span)
  var divnam = document.getElementById(top)

  //using the variable and set it with the input 
  spanname.innerHTML = rightanswer;
// 
//set a condition  
//if the answer is write say GREAT and show the answer;
// if the answer is not write alert  SORRY and show the write answer.
if (Valore == rightanswer) {
  formname.innerHTML ="<div style='background-color:lightgreen'><h1>GREAT! YOU'RE RIGHT: The answer, in fact, was: " + rightanswer + "</h1></div>";
}
else {
  alert("try agin the answer was not write!")
  formname.innerHTML ="<div style='background-color:red'><h1>Sorry, you where wrong: The answer was: " + rightanswer + "</h1></div>";
}
};
function handleClick()
  {         
var amountCorrect = 0;          
for(var i = 1; i <= 10; i++) {
  var radios = document.getElementsByName('choice'+i);
  for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    console.log (amountCorrect++);
    if(radio.value == "correct" && radio.checked) {
      
    }
  }
 }                   
    alert("Correct Responses: " + amountCorrect);
  };

// var input = document.getElementsByTagName("button")
// for (var i=0;i<input.length;i++) {
// if (input[i].value=="correct") {
//     if (input[i].checked==true){
//         correct++
//     }
// }
// console.log(correct)
// }
  