
let square=function(a){
    a=a*a;
    return a;   
}

let sumOfSquare=function(a,b,square){
    let k=square(a);
    let q=square(b)
    return k+q;
}
console.log(sumOfSquare(1,2,square));

// qustion 1- given array a[] of transcations we have to filter credit and debit tractaions?

let tractaions=[100,-200,300,400,-500,600]
let iscredit=function(trancation){
    return trancation > 0;
}
let isdebit=function(tractaion){
    return tractaion < 0;
}
let filter=function(tractaions,cb){
    let filtertrancations=[]
    for(let i=0; i< tractaions.length; i++){
        if(cb(tractaions[i])){
            filtertrancations.push(tractaions[i]);
        }
    }
    return filtertrancations;
}
let creditTransctions=filter(tractaions,iscredit);
let debitTrancations=filter(tractaions,isdebit);
console.log(creditTransctions);
console.log(debitTrancations);

/* question -2; given a array of circle radius we need to calicluate diameter,area of the circle
 and circurmance of the circle? */

let radiusOfcircles=[1,2,3,4,5]
let diameterOfcircles=function(radius){
    return 2*radius;
}
let areaOfcircles=function(radius){
    let r=radius*radius;
    return Math.PI*r;
}
let circurmanceOfcircles=function(radius){
    return 2*Math.PI*radius;
}
let caliculate=function(radiusOfcircles,cb){
    cal=[]
    for(let i=0; i<radiusOfcircles.length; i++){
        cal.push(cb(radiusOfcircles[i]));
    }
    return cal
}
let diameter=caliculate(radiusOfcircles,diameterOfcircles);
let area=caliculate(radiusOfcircles,areaOfcircles);
let cr=caliculate(radiusOfcircles,circurmanceOfcircles);
console.log(diameter,area,cr);