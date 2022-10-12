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
        case '+': return (add(a,b));
        case '-': return(subtract(a,b));
        case '*': return(multiply(a,b));
        case '/': return(divide(a,b));
    }
}

const numbers = Array.from(document.querySelectorAll(".number"));


let clickables=[];
for (let i=0;i<numbers.length;++i){
    clickables.push(numbers[i]);
}
clickables.push(document.querySelector('.d'));
clickables.push(document.querySelector('.clear'));
clickables.push(document.querySelector('.equals'));

let operand1=0;
let operand2=0;
let opFlag=false;
let decFlag=false;
let result = 0;
let op ="";
let dbyz=false;
clickables.forEach((button)=>{
    button.addEventListener('click',()=>{
        let content;
        let display = document.querySelector(".display");

        if (button.className==="clear"){
            display.textContent='';
            decFlag=false;
            opFlag=false;
            result=0;
            op="";
            operand1=0;
            operand2=0;
        }else if(button.className==="d"){
            content=display.textContent;
            content=content.slice(0,content.length-1);
            display.textContent=content;
        }else if (button.className==="equals"){
            operand2 = Number(display.textContent);
            if (operand2===0&&op==='/'){
                display.textContent="Dummy, cant divide by 0";
                operand2=0;
                operand1=0;
                dbyz=true;
            }
            else {
                result = operate(operand1, op, operand2);
                display.textContent = result;
                console.log(result);
            }
            opFlag = false;
            decFlag = false;
            op = "";
        }

        if (button.dataset.num){
            if (dbyz){
                display.textContent='';
                dbyz=false;
            }
            display.textContent=display.textContent+button.dataset.num;
        }else if (button.dataset.opcode){
            if (dbyz){
                display.textContent='';
                dbyz=false;
            }
            op = String(button.dataset.opcode);
            if (!opFlag){
                opFlag = true;
                operand1 = Number(display.textContent);
                display.textContent="";
                console.log(operand1);
            }
        }else if (button.dataset.dec){
            if (dbyz){
                display.textContent='';
                dbyz=false;
            }
            if(!decFlag){
                display.textContent+='.';
                decFlag=true;
            }
        }

    });
})