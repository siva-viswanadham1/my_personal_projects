const { error } = require("console");
let fs=require("fs");

let prosimeFullfill=data=>{
    console.log("promise fulfilled",data);
}
let promiseReject=err=>{
    console.log("promise error got",err);
}
let finish=()=>{
    console.log('promise completed');
}
let promise1=fs.promises.readFile('./file1.txt','utf8');
promise1
    .then(prosimeFullfill)
    .catch(promiseReject)
    .finally(finish());

let promise2=fs.promises.readFile('./file2.txt','utf8');
promise2
    .then(prosimeFullfill)
    .catch(promiseReject)
    .finally(finish);

let promise3=fs.promises.readFile('./file3.txt','utf8');
promise3
    .then(prosimeFullfill)
    .catch(promiseReject)
    .finally(finish);



