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
