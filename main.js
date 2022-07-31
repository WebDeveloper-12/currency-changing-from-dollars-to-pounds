var inputvar1=document.getElementById('input1')
var inputvar2=document.getElementById('input2')
var outputvar = document.getElementById("output1")

function calculation(){
    inputValue = inputvar1.value
    inputValue2 = inputvar2.value
    outputValue = (inputValue2-inputValue)*365.25
    outputValue2 = (inputValue2-inputValue)*12
    outputValue3 = (inputValue2-inputValue)
    outputvar.value = "You are " + outputValue3 + " years old, " + outputValue2 + " months old and " + outputValue + " days old"
}
