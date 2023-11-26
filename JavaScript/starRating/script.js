let component=document.querySelector('#star-container');
let stars=document.querySelectorAll('.star');
let rating=document.querySelector('#count');



component.addEventListener('click',event=>{
    let count=event.target.getAttribute('data-index')
    for(let i=0; i<stars.length;i++){
        stars[i].classList.remove('star-filled');
    }
    for(let i=0;i<count;i++){
        stars[i].classList.add('star-filled');
    }
    rating.innerText=count;
   

})

let flag=stars.length;
stars.forEach(star=>{
    star.addEventListener('mouseover',Event=>{
        f=Event.target.getAttribute('data-index');
        for(let i=0;i<flag;i++){
            stars[i].classList.remove('star-filled')
        }
        for(let i=0;i<f;i++){
            stars[i].classList.add('star-filled')
        }
       
    })
    
})
  
