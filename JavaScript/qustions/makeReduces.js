let sum=function(a,b){
    return a+b;
}
let arr=[1,2,3,4]
function reduce(arr, reducer) {
    let ans=arr[0];
    for(let i=1;i<arr.length;i++){
        ans=reducer(ans,arr[i]);
    }
    return ans;
}
console.log(reduce(arr,sum));