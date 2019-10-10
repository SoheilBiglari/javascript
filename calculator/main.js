/*
Write your script here!
Note: it is advised to work on this in small steps!
    1. When you click a button, make your code log something to the console.
        This way you can see if your event listener is linked properly!
    2. When you click a button, make the number/operation appear in the calc-preview div.
    3. ......
*/
var keys = document.querySelectorAll('#calc-buttons button');
var operators =['+','-','*','/','%'];
var decimalAdded = false;

var i;
var equation;
for(i = 0; i < keys.length; i++){
    keys[i].onclick = function(e){
        var input = document.querySelectorAll('#calc-preview');
        var inputValue = input.innerHTML;
        var btnValue = this.innerHTML;


        if(btnValue == 'C') {
            input.innerHTML = '';
            decimalAdded = false;
        }
        else if (btnValue == '='){
            equation = inputValue;
            var lastChar = equation[equation.length - 1];

            equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

            if(operators.indexOf(lastChar) > -1 || lastChar == '.')
                equation = equation.replace(/.$/, '');

            if(equation)
                input.innerHTML = eval(equation);

            decimalAdded = false;
        }

        else if(operators.indexOf(btnValue) > -1) {
            /*var lastChar = inputVal[inputVal.length - 1];*/

            if(inputValue != '' && operators.indexOf(lastChar) == -1)
                input.innerHTML += btnValue;

            else if(inputValue == '' && btnValue == '-')
                input.innerHTML += btnValue;

            if(operators.indexOf(lastChar) > -1 && inputVal.length > 1){
                input.innerHTML = inputValue.replace(/.$/, btnValue);
            }
            decimalAdded =false;
        }
        else if(btnValue == '.') {
            if(!decimalAdded) {
                input.innerHTML += btnVal;
                decimalAdded = true;
            }
        }
        else {
            input.innerHTML += btnValue;
        }
        e.preventDefault();
    }
}
