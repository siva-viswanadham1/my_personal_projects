
function caliculate(input){
    return function(a){
        return function(b){
            if(input=='sum'){
                return a+b;
            }else if(input=='subtract'){
                return a-b;
            }else if(input=='multiply'){
                return a*b;
            }else if(input=='division'){
                return a/b;
            }else{
                return "give the proper input";
            }
        }
    }
}

console.log(caliculate('sum')(2)(3));
console.log(caliculate('subtract')(2)(3));
console.log(caliculate('multiply')(2)(3));
console.log(caliculate('division')(2)(3));
console.log(caliculate('...')(2)(3));