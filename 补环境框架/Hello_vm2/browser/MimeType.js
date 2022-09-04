hellovm.memory.MimeType={}
var MimeType=function MimeType() {
    throw new TypeError('Illegal constructor')
};hellovm.safefunction(MimeType)
Object.defineProperties(MimeType.prototype,{
    [Symbol.toStringTag]:{
        value:'MimeType',
        configurable:true
    }
    
})
//////////////////////////////////////////////////////
MimeType.prototype.description=''
MimeType.prototype.enabledPlugin=null
MimeType.prototype.suffixes=''
MimeType.prototype.type=''

MimeType.prototype.__defineGetter__('description',function(){
    try{
        return this.description;
    }
    catch{
        throw new TypeError('Illegal invocation');
    }
});
MimeType.prototype.__defineGetter__('enabledPlugin',function(){
    try{
        return this.enabledPlugin;
    }
    catch{
        throw new TypeError('Illegal invocation');
    }
});
MimeType.prototype.__defineGetter__('suffixes',function(){
    try{
        return this.suffixes;
    }
    catch{
        throw new TypeError('Illegal invocation');
    }
});
MimeType.prototype.__defineGetter__('type',function(){
    try{
        return this.type;
    }
    catch{
        throw new TypeError('Illegal invocation');
    }
});
//////////////////////////////////////////////////////
hellovm.memory.MimeType.new =function(data,initPlugin){
    var mimetype={}
    if(data!=undefined)
    {
        mimetype.description=data.description
        mimetype.suffixes=data.suffixes
        mimetype.type=data.type
        mimetype.enabledPlugin=initPlugin;
    }
    mimetype.__proto__=MimeType.prototype
    return mimetype;
}