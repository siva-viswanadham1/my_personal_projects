const fs=require('fs');

// to read the file
const data=fs.readFileSync('f1.txt','utf-8')
console.log(data)

//to write the file
//f2 file is not there it creating the file
const content='hi i am new file name f2.txt'
fs.writeFileSync('f2.txt',content,'utf-8')


// to append the file

const moreContent='I love nodejs'
fs.appendFileSync('f1.txt',moreContent)