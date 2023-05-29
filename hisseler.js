const fs  = require('fs') ;
const pdf = require('pdf-parse');
let databuffer = fs.readFileSync('pdf')
pdf(databuffer).then(function(data){


   
     
    console.log(data.metadata)
    console.log(data.info)
    console.log(data.text);

    

})

