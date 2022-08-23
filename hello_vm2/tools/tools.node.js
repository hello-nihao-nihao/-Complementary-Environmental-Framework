var fs=require('fs');
function Getcode(){
    var code='';
    //框架的内存管理
    code += fs.readFileSync(`${__dirname}/vm_memory.js`)+"\r\n";
    //框架的保护函数
    code += fs.readFileSync(`${__dirname}/vm_safefunction.js`)+"\r\n";
    //框架输出
    code += fs.readFileSync(`${__dirname}/vm_print.js`)+"\r\n";
    //框架代理
    code += fs.readFileSync(`${__dirname}/vm_proxy.js`)+"\r\n";
    return code;
}

module.exports={
    Getcode
}