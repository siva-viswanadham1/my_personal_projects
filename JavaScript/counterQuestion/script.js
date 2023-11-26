let counter=document.querySelector('#number');
let increment=document.querySelector('#increment');
let plus=document.querySelector(".add");
let subtract=document.querySelector('#subtract');
let reset=document.querySelector("#reset");

plus.addEventListener('click',()=>{
    let cv=parseInt(counter.innerText);
    let i=parseInt(increment.value);
    let answer=cv+i;
    counter.innerText=answer;
});
subtract.addEventListener('click',()=>{
    let cv=parseInt(counter.innerText);
    let i=parseInt(increment.value);
    let answer=cv-i;
    if(answer<0){
        answer=0;
    }
    counter.innerText=answer;
})
reset.addEventListener('click',()=>{
    counter.innerText=0;
})
