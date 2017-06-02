$(document).ready(function() {
  $("#form-calculator").submit(function() {
    var number1 = parseFloat($("input#number1").val());
    var number2 = parseFloat($("input#number2").val());
    var number3;
    var operator = $("input:radio[name=operator]:checked").val();
    var operatorPhrase;

    if (operator === "add") {
      number3 = number1 + number2;
      operatorPhrase = "+";
    } else if (operator === "subtract") {
      number3 = number1 - number2;
      operatorPhrase = "-";
    } else if (operator === "multiply") {
      number3 = number1 * number2;
      operatorPhrase = "*";
    } else if (operator === "divide") {
      number3 = number1 / number2;
      operatorPhrase = "/";
    } else if (operator === "remainder") {
      number3 = number1 % number2;
      operatorPhrase = "%";
    }

    //alert(number3);
    $("#num1").text(number1);
    $("#num2").text(number2);
    $("#num3").text(number3);
    $("#op").text(operatorPhrase);
    $("#result").show();

    event.preventDefault();
  });
});
