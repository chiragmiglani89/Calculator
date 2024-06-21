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
    screen.value = Math.sin(screen.value);
}
function cos() {
    screen.value = Math.cos(screen.value);
}
function tan() {
    screen.value = Math.tan(screen.value);
}
function pow() {
    screen.value = Math.pow(screen.value, 2);
}
function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}
function ln() {
    screen.value = Math.log(screen.value);
}
function log10() {
    screen.value = Math.log10(screen.value);
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



// function evaluate(expression)
//     {
//         let tokens = expression.split('');
  
//          // Stack for numbers: 'values'
//         let values = [];
  
//         // Stack for Operators: 'operators'
//         let ops = [];
  
//         for (let i = 0; i < tokens.length; i++)
//         {
//              // Current token is a whitespace, skip it
//             if (tokens[i] == ' ')
//             {
//                 continue;
//             }
  
//             // Current token is a number,
//             // push it to stack for numbers
//             if (tokens[i] >= '0' && tokens[i] <= '9')
//             {
//                 let sbuf = "";
                  
//                 // There may be more than
//                 // one digits in number
//                 while (i < tokens.length &&
//                         tokens[i] >= '0' &&
//                             tokens[i] <= '9')
//                 {
//                     sbuf = sbuf + tokens[i++];
//                 }
//                 values.push(parseInt(sbuf, 10));
                
//                 // Right now the i points to
//                 // the character next to the digit,
//                 // since the for loop also increases
//                 // the i, we would skip one
//                 //  token position; we need to
//                 // decrease the value of i by 1 to
//                 // correct the offset.
//                   i--;
//             }
  
//             // Current token is an opening
//             // brace, push it to 'ops'
//             else if (tokens[i] == '(')
//             {
//                 ops.push(tokens[i]);
//             }
  
//             // Closing brace encountered,
//             // solve entire brace
//             else if (tokens[i] == ')')
//             {
//                 while (ops[ops.length - 1] != '(')
//                 {
//                   values.push(applyOp(ops.pop(),
//                                    values.pop(),
//                                   values.pop()));
//                 }
//                 ops.pop();
//             }
  
//             // Current token is an operator.
//             else if (tokens[i] == '+' ||
//                      tokens[i] == '-' ||
//                      tokens[i] == '*' ||
//                      tokens[i] == '/')
//             {
                  
//                 // While top of 'ops' has same
//                 // or greater precedence to current
//                 // token, which is an operator.
//                 // Apply operator on top of 'ops'
//                 // to top two elements in values stack
//                 while (ops.length > 0 &&
//                          hasPrecedence(tokens[i],
//                                      ops[ops.length - 1]))
//                 {
//                   values.push(applyOp(ops.pop(),
//                                    values.pop(),
//                                  values.pop()));
//                 }
  
//                 // Push current token to 'ops'.
//                 ops.push(tokens[i]);
//             }
//         }
  
//         // Entire expression has been
//         // parsed at this point, apply remaining
//         // ops to remaining values
//         while (ops.length > 0)
//         {
//             values.push(applyOp(ops.pop(),
//                              values.pop(),
//                             values.pop()));
//         }
  
//         // Top of 'values' contains
//         // result, return it
//         return values.pop();
//     }
  
//     // Returns true if 'op2' has
//     // higher or same precedence as 'op1',
//     // otherwise returns false.
//     function hasPrecedence(op1, op2)
//     {
//         if (op2 == '(' || op2 == ')')
//         {
//             return false;
//         }
//         if ((op1 == '*' || op1 == '/') &&
//                (op2 == '+' || op2 == '-'))
//         {
//             return false;
//         }
//         else
//         {
//             return true;
//         }
//     }
  
//     // A utility method to apply an
//     // operator 'op' on operands 'a' 
//     // and 'b'. Return the result.
//     function applyOp(op, b, a)
//     {
//         switch (op)
//         {
//         case '+':
//             return a + b;
//         case '-':
//             return a - b;
//         case '*':
//             return a * b;
//         case '/':
//             if (b == 0)
//             {
//                 document.write("Cannot divide by zero");
//             }
//             return parseInt(a / b, 10);
//         }
//         return 0;
//     }