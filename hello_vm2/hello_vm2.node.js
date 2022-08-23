var fs =require('fs');
//框架工具模块
var vmtools=require('./tools/tools.node.js');
function Getcode(){
    var code='';
    //引入框架工具代码
    code+=vmtools.Getcode()+"\r\n";
    //引入用户框架配置
    code+="hellovm.memory.config.proxy=true;\r\n"; 
    //引入浏览器相关
    code+=fs.readFileSync(`${__dirname}/browser/EventTarget.js`)
    code+=fs.readFileSync(`${__dirname}/browser/WindowProperties.js`)
    code+=fs.readFileSync(`${__dirname}/browser/Window.js`)
    code+=fs.readFileSync(`${__dirname}/browser/Location.js`)
    code+=fs.readFileSync(`${__dirname}/browser/Navigator.js`)
    //引入用户自定义环境
    code+="\ndebugger;\r\n";
    return code
}

module.exports={
    Getcode
}