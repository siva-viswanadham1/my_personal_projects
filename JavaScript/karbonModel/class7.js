let colors=document.querySelectorAll(".color");
let f=false
colors.forEach(color=>{
    color.addEventListener('click',event=>{
        f=!f;
        let ref=event.target;
        let flag=ref.getAttribute('')
    })
})
