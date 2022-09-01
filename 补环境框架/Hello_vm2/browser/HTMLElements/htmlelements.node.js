var fs=require('fs');
function Getcode(){
    var code='';
    code += fs.readFileSync(`${__dirname}/HTMLDivElement.js`)+"\r\n";
   
    return code;
}

module.exports={
    Getcode
}