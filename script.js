let screen = document.querySelector('#screen');
let btn = document.querySelectorAll('.btn');

for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;
        if (btntext == '=') {
            let ans = evaluate(screen.value);
            if(isNaN(ans)){
                // alert("Error!")
                screen.value = "Error!";
            }
            else{
                screen.value = ans;
            }
        }
        else {
            if (btntext == 'x') {
                btntext = '*';
            }
            if (btntext == '÷') {
                btntext = '/';
            }
            screen.value += btntext;
        }
    });
}

function evaluate(expression){
    let tokens = expression.split('');

    let values = [];
    let ops = [];

    for(let i = 0; i<tokens.length; i++){
        if (tokens[i] == ' '){
            continue;
        }
        if(tokens[i] >= '0' && tokens[i] <= '9'){
            let str = "";
            while(i<tokens.length && tokens[i] >= '0' && tokens[i] <= '9'){
                str = str + tokens[i++];
            }
            values.push(parseInt(str,10));
            i--;
        }
        else if(tokens[i] == '('){
            ops.push(tokens[i]);
        }
        else if(tokens[i] == ')'){
            while(ops[ops.length-1] != '('){
                values.push(applyOp(ops.pop(), values.pop(), values.pop()));
            }
            ops.pop();
        }
        else if(tokens[i] == '+' || tokens[i] == '-' || tokens[i] == '*' || tokens[i] == '/'){
            while(ops.length >0 && hasPrecedence( tokens[i], ops[ops.length-1] )){
                values.push(applyOp(ops.pop(), values.pop(), values.pop()));
            }
            ops.push(tokens[i]);
        }
    }
    while(ops.length > 0){
        values.push(applyOp(ops.pop(), values.pop(), values.pop()));
    }
    return values.pop();
}

function hasPrecedence(op1, op2){
    if(op2 == '(' || op2 == ')'){
        return false;
    }
    else if((op1 == '*' || op1 == '/') && (op2 == '+' || op2 =='-')){
        return false
    }
    else{
        return true;
    }
}

function applyOp(op, b, a){
    switch(op){
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '*':
            return a*b;
        case '/':
            if(b == 0){
                document.write("Cannot divide by zero");
            }
            return parseInt(a / b, 10);
    }
    return 0;
}




function sin() {
    if(isNaN( Math.sin(screen.value))){
        screen.value = "Error!"
    }
    else{
        screen.value =  Math.sin(screen.value);
    }
}
function cos() {
    if(isNaN( Math.cos(screen.value))){
        screen.value = "Error!"
    }
    else{
        screen.value =  Math.cos(screen.value);
    }
}
function tan() {
    if(isNaN( Math.tan(screen.value))){
        screen.value = "Error!"
    }
    else{
        screen.value = Math.tan(screen.value);
    }
}
function pow() {
    if(isNaN( Math.pow(screen.value, 2))){
        screen.value = "Error!"
    }
    else{
        screen.value = Math.pow(screen.value, 2);
    }
}
function sqrt() {
    if(isNaN( Math.sqrt(screen.value, 2))){
        screen.value = "Error!"
    }
    else{
        screen.value = Math.sqrt(screen.value, 2);
    }
}
function ln() {
    if(isNaN( Math.log(screen.value))){
        screen.value = "Error!"
    }
    else{
        screen.value = Math.log(screen.value);
    }
}
function log10() {
    if(isNaN( Math.log10(screen.value))){
        screen.value = "Error!"
    }
    else{
        screen.value = Math.log10(screen.value);
    }
}
function pi() {
    screen.value = Math.PI;
}
function e() {
    screen.value = Math.E;
}
function inv() {
    screen.value = -screen.value;
}
function rad(deg) {
    let pi = Math.PI;
    screen.value = deg * (pi / 180); q
}
function fact() {
    let i, num, f;
    f = 1;
    num = screen.value;
    for (i = 1; i < num; i++) {
        f *= i;
    }
    i = i - 1;
    screen.value = f;
}

function BS() {
    screen.value = screen.value.substr(0, screen.value.length - 1)
}


