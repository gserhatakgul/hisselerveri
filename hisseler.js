const fs  = require('fs') ;
const pdf = require('pdf-parse');
let databuffer = fs.readFileSync('C:\\\Users\\\LENOVO\\\Downloads\\\zfg_yatırım_17.03.20231.pdf')
pdf(databuffer).then(function(data){


   
     
    console.log(data.metadata)
    console.log(data.info)
    console.log(data.text);

    

})

