let op_start;
let op_new = '';
let result = 0;
let a;

function oper() {
    a = Number(document.getElementById('input').value);
    document.getElementById ('input').value = '';
    switch (op_new) {
        case '/':
            result /= a;
            break;
        case '*':
            result *= a;
            break;
        case '+':
            result += a;
            break;
        case '-':
            result -= a;
            break;
        case '':
            result = a;
            break;
    }
    op_new = op_start;
}

function calc() {
    a = Number(document.getElementById('input').value);
    document.getElementById ('input').value = '';
    switch (op_new) {
        case '/':
            result /= a;
            break;
        case '*':
            result *= a;
            break;
        case '+':
            result += a;
            break;
        case '-':
            result -= a;
            break;
        case '':
            result = a;
            break;
    }

    let parent = document.querySelector('#output');
    let p = document.createElement('p');
    p.textContent = String(result);
    parent.append(p);
    result = 0;
    op_new = '';
}