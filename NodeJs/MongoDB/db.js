const mongoose = require('mongoose')
const password=require('../crendnicals.js').password

const DB=`mongodb+srv://nsspsiva:${password}@cluster0.c9ziyxn.mongodb.net/my_db?retryWrites=true&w=majority`

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('DB server connected')
}).catch((err)=>{
    console.log(`Error in connecting ${err}` )
})

//Schema(class)

const courseSchema=new mongoose.Schema({
    name: String,
    mentior: String,
    publishedDate:{type:Date, default:Date.now},
    isPublished:Boolean,
    ratings:Number,
    lastUpdate:{type:Date, default:Date.now}

})

//Model (constructor)

const Course=mongoose.model('Course',courseSchema)

// Create a Document
async function createCourse(){
    const course=new Course({
        name:'.....',
        mentior:'...',
        isPublished:true,
        ratings:2
    })
    const courseCreated=await course.save()
    console.log(courseCreated)
}
//createCourse()

async function getCourseDetails() {
    const courseDetails= await Course.find({ratings:{$gte:4.5}})
    console.log(courseDetails)
}
//getCourseDetails()

//deleteRecord
async function deleteRecord(){
    const record=await Course.findByIdAndDelete('65cfebb032ba06924723cf11')
    console.log(record)
}

//deleteRecord()

// update record

async function updateRecord(id){
    const course=await Course.findById(id)
    if(!course){
        return;
    }
    course.ratings=5
    course.name='javascript'
    const updateCourse=await course.save()
    console.log(updateCourse)

}
//updateRecord('65cfea18ddfcda4d8ab2795f')