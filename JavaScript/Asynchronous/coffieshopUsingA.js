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

async function serveorder(){
    try{
        let orderPlace=await placeOrder('coffee');
        console.log(orderPlace);
        let orderprocess=await processOrder(orderPlace);
        console.log(orderprocess);
        let bill=await generateBill(orderprocess);
        console.log(bill);
    }catch(error){
        console.log(error);
    }
}
serveorder()