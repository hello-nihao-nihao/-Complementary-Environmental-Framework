function xx(pr,fo,name_)
{
    var code="";
    switch(typeof(pr[fo])){
        case "function":
            var temp=name_+".prototype."+fo;
            code+='//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n'
            code+=temp +"="+"function "+fo+"(){debugger;}; hellovm.safefunction("+temp+");\n";
            code+='hellovm.rename('+temp+', \''+fo+'\');\n';
            // code+=name_+'.prototype.'+fo+' = '+name_+'.prototype.'+fo+'.bind(null);\n'
            // code+='Reflect.deleteProperty('+name_+'.prototype.'+fo+', \'name\');\n'
            // code+='Object.defineProperty('+name_+'.prototype.'+fo+',\'name\',{value: `'+fo+'`,writable:false,enumerable:false,configurable:true});\n'
            code+='//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////'
            break;
        case "object":
            var temp=name_+".prototype."+fo;
            code=temp+"="+"hellovm.proxy(class "+fo+"{})";
            break
        default:
            code = name_+".prototype."+fo+"="+pr[fo]+";";
            break
    
    }
    return code;
}

function getcode(pr,name_){
    var code=""
    for(var fo in pr.__proto__)
    {
        code+=xx(pr,fo,name_);
        code+='\n'
        
    }
    return code
}
function console_code(pr,name_){
    console_=getcode(pr,name_)
    console.log(console_)
}
function copy_code(pr,name_){
    copy(getcode(pr,name_));
}