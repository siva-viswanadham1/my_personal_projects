// let click=document.querySelector('.grandparent')
// click.addEventListener('click',(event)=>{
//     let current=event.target.classList
//     alert(`${current[0]} is clicked`)
//     console.log(`${current[0]} is clicked`)
//     event.stopPropagation()

// })

// let gp=document.querySelector('.grandparent')
// let p=document.querySelector('.parent')
// let c=document.querySelector('.child')

// gp.addEventListener('click',(event)=>{
//     //alert("Gp is clicked")
//     console.log('gp is clicked')
//     console.log(event.eventPhase)
    
// })
// p.addEventListener('click',(event)=>{
//     //alert("p is clicked")
//     console.log('p is clicked')
//     console.log(event.eventPhase)
   
// })
// c.addEventListener('click',(event)=>{
//     //alert("c is clicked")
//     console.log('c is clicked')
//     console.log(event.eventPhase)
    
// })

// let incriment=document.querySelector('#incriment')
// let decriment=document.querySelector('#decriment')

// incriment.addEventListener('click',()=>{
//     let e=document.querySelector('#counter')
//     let value=parseInt(e.innerText)
//     console.log(value)
//     value=value+1
//     e.innerText=value
// })
// decriment.addEventListener('click',()=>{
//     let e=document.querySelector('#counter')
//     let value=parseInt(e.innerText)
//     console.log(value)
//     if(value>0){
//         value=value-1
//     }
//     e.innerText=value
// })

// let e=document.querySelector('#counter')
// e.addEventListener('click',(event)=>{
//     let el=event.target.id
//     console.log(el)
// })

// let inputField=document.querySelector('.input')
// function inputText(){
//     let va=inputField.value
//     console.log(va)
// }
// inputText()

// let a=10
// console.log(a)
// function k(){
//     //console.log(a)
//     let a=20
// }
// k()

console.log(this)

function f(){
    console.log(this)
}
f()
