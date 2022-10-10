function add(a,b){
    return Number(a)+Number(b);
}

function subtract(a,b){
    return Number(a)-Number(b);
}

function multiply(a,b){
    return Number(a)*Number(b);
}

function divide(a,b){
    return Number(a)/Number(b);
}

function operate(a,op,b){
    switch (op){
        case '+': console.log(add(a,b));break;
        case '-': console.log(subtract(a,b));break;
        case '*': console.log(multiply(a,b));break;
        case '/': console.log(divide(a,b));break;
    }
}

