
var arr = ['+', '-', '/', '%'];
var text;
var n1 = 0;
var n2 = 0;
var op = '';

function a(n) {
    text = document.getElementById('text1').value = n;
}

function setNumber() {
    document.getElementById('result').value = text;
    for (i = 0; i < arr.length; i++){
        if(document.getElementById('result').value == arr[i]){
            op = text;
        }    
    }
    
}


function calc() {
    switch (op) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            result = n1 / n2;
            break;
        case '%':
            result = n1 % n2;
            break;
        default:
            break;
    }
}







