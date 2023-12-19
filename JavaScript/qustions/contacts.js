let contacts=[
    {
        firstName:"kristian",
        lastName:"Vos",
        number:"1234567891"
    }
]
function lookUpProfile(name, prop) {
    // Write your code here
    // Use console.log to output the result
    for(let i=0;i<contacts.length;i++){
        
        if(name==contacts[i].firstName){
            if(contacts[i].hasOwnProperty(prop)){
                let per=contacts[i];
                if(prop=='lastName'){
                    return per.lastName;
                }
                if(prop=='number'){
                    return per.number
                }
                if(prop=='likes'){
                    return per.likes;
                }
            }else{
                return "No such property"
            }
            //break;
        }
    }
    return "No such contact"
  
}

console.log(lookUpProfile('bob','lastName'))