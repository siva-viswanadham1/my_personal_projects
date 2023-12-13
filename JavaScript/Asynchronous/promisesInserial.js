let fs=require('fs');

let promise1=fs.promises.readFile('./file1.txt','utf8');

let recallback1=data=>{
    console.log('promise 1 is done',data);
    let promise2=fs.promises.readFile("./file2.txt",'utf8');
    return promise2;
}
let recallback2=data=>{
    console.log('promise 2 is done',data);
    let promise3=fs.promises.readFile("./file3.txt",'utf8');
    return promise3;
}
let recallback3=data=>{
    console.log('promise 3 is done',data);
}

promise1.then(recallback1).then(recallback2).then(recallback3);