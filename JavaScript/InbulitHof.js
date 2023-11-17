//map function
let numbers=[1,2,3,4,5,6]
let squareofnumber=numbers.map(function(number){
        return number*number
});
console.log(numbers)
console.log(squareofnumber)

// filter function

let tractaions=[100,-200,300,400,-500];
let credit=tractaions.filter(function(tractaion){
    return tractaion>0;
})
let debit=tractaions.filter(function(tractaion){
    return tractaion<0;
})
console.log(tractaions)
console.log("credit "+credit+" debit "+debit);

//reduce function
let num=[1,2,3,4,5,6]
let sum=num.reduce(function(number,sum){
    sum=sum+number;
    return sum
},0)
console.log(sum);

//every

let allcredit=tractaions.every(function(tractaion){
    return tractaion > 0;
})
console.log(allcredit);

//some
let anydebit=tractaions.some(function(tractaion){
    return tractaion < 0;
})
console.log(anydebit)

//Function Chaining
let INR=[100,-200,300,400,-500,600]
let creditInUsd=INR.map(function(tractaion){
    return tractaion/82;
}).filter(function(USD){
    return USD >0;
});
console.log(creditInUsd)
