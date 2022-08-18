//function to clear screen 
function clearScreen () {
    document.getElementById("result").value ="";
}

//function to clear single value 
function Delete () {
    document.previousOperand=''
    document.CurrentOperand=''
    document.operation=undefined

    document.CurrentOperand=document.CurrentOperand.toString().slice(0,-1);
}

//function to display values
function display(value) {
    document.getElementById("result").value += value;
}

//function to evaluate expression
function calculate(){
    let a=document.getElementById("result").value;
    let b=eval(a);
    document.getElementById("result").value=b;
}
 