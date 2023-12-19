function sum(a){
    var prev=a;
    return function(b){
        if(b){
            return sum(a+b);
        }
        return a;
    }
}
console.log(sum(2)(3)(4)())