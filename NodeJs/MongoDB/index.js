const mongoose = require('mongoose')
const password=require('../crendnicals.js').password

const DB=`mongodb+srv://nsspsiva:${password}@cluster0.c9ziyxn.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('DB server connected')
}).catch((err)=>{
    console.log(`Error in connecting ${err}` )
})