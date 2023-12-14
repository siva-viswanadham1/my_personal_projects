const { error } = require("console")

let placeOrder = (drink) => {
    return new Promise((resolve, reject) => {
        if (drink == 'coffee') {
            resolve('Order for coffee placed')
        } else {
            reject('Order can not be placed')
        }
    })
}

let processOrder = orderStatus => {
    return new Promise(resolve => {
        resolve(`${orderStatus} and served`)
    })
}
let generateBill = processOrderStatus => {
    return new Promise(resolve => {
        resolve(`${processOrderStatus} and bill is generated`)
    })
}

// placeOrder('coffee').then(orderStatus => {
//     console.log(orderStatus)
//     return orderStatus
// })
// .then(orderStatus => {
//     let processOrderStatus = processOrder(orderStatus)
//     return processOrderStatus
// })
// .then(processOrderStatus => {
//     console.log(processOrderStatus)
//     let billGenerated=generateBill(processOrderStatus);
// }).then(billGenerated => {
//     console.log(billGenerated)
// }).catch(error => {
//     console.log(error)
// })

let promise1=new Promise((reslove,reject)=>{
    setTimeout(()=>{
        reslove('promise 1 is resove');
    },2000)
})
let promise2=new Promise((resove,reject)=>{
    setTimeout(()=>{
        reject('promise 2 is rejected');
    },1000)
    
})
let promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('promise 3 is resolve');
    },500)
});
Promise.race([promise1,promise2,promise3])
    .then(data=>console.log(data))
    .catch(error=>console.log(error))

Promise.any([promise1,promise2,promise3])
    .then(data=>console.log(data))
    .catch(error=>console.log(error))