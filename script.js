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

const numbers = Array.from(document.querySelectorAll(".number"));


let clickables=[];
for (let i=0;i<numbers.length;++i){
    clickables.push(numbers[i]);
}
clickables.push(document.querySelector('.d'));
clickables.push(document.querySelector('.clear'));
clickables.push(document.querySelector('.equals'));

console.table(clickables);
clickables.forEach((button)=>{
    button.addEventListener('click',()=>{
        let content;
        let display = document.querySelector(".display");
        console.log(button);
        if (button.className==="clear"){
            display.textContent='';
        }else if(button.className==="d"){
            content=display.textContent;
            content=content.slice(0,content.length-1);
            display.textContent=content;
        }

        if (button.dataset.num){
            content = button.dataset.num;
            display.textContent=display.textContent+content;
        }else if (button.dataset.opcode){
            content=button.dataset.opcode;
            display.textContent=display.textContent+content;
        }
        
    });
})