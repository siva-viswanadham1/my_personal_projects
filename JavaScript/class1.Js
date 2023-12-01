let arr=[1,2,3,4,5];
arr.push(...[6,7,8,9,10,11,12,1,3,4,5]);
console.log(arr);
let arr2=[1,2,3,4];
arr2.push([5,6,7]);
console.log(arr2);
let myfunc=function(){
    console.log("function expression")
}
myfunc()

let random=function(){
    return Math.random() *6;
}
let randomnumber=function(){
    let f=random()
    if(f<=1){
        return 1;
    }else if(f<=2){
        return 2;
    }else if(f<=3){
        return 3;
    }else if(f<=4){
        return 4;
    }else if(f<=5){
        return 5;
    }else{
        return 6;
    }
}


function fun(){
    return 6;
}

let k=fun;
console.log(k);



