hellovm.memory.MimeTypeArray={}
var MimeTypeArray=function MimeTypeArray() {
    throw new TypeError('Illegal constructor')
};hellovm.safefunction(MimeTypeArray);

hellovm.memory.MimeTypeArray.iterator= function values(){
    debugger;
};hellovm.safefunction(hellovm.memory.MimeTypeArray.iterator)

Object.defineProperties(MimeTypeArray.prototype,{
    [Symbol.toStringTag]:{
        value:'MimeTypeArray',
        configurable:true
    },
    [Symbol.iterator]:{
        value:hellovm.memory.MimeTypeArray.iterator,
        configurable:true
    }
})
//////////////////////////////////////////////////////////////
MimeTypeArray.prototype.item=function item(index){
    debugger;
    return this[index]
};hellovm.safefunction(MimeTypeArray.prototype.item);
hellovm.rename(MimeTypeArray.prototype.item,'item')
MimeTypeArray.prototype.namedItem=function namedItem(key){
    debugger;
    return this[key]
};hellovm.safefunction(MimeTypeArray.prototype.namedItem)
hellovm.rename(MimeTypeArray.prototype.namedItem,'namedItem')

MimeTypeArray.prototype.__defineGetter__('length',function(){
    try{
        return this.length;
    }
    catch{
        throw new TypeError('Illegal invocation');
    }
});
////////////////////////////////////////////////////////////////////


//依赖注入
navigator.mimeTypes={}
navigator.mimeTypes.temp=0
for (let pindex=0;pindex<navigator.plugins.length;pindex++){
    var plugin_=navigator.plugins.item(pindex);
    for (let mindex=0;mindex<plugin_.length;mindex++){
        var mimeType_=plugin_.item(mindex)
        if(navigator.mimeTypes[mimeType_.type]==undefined)
        {
            navigator.mimeTypes[navigator.mimeTypes.temp]=mimeType_;
            Object.defineProperty(navigator.mimeTypes,mimeType_.type,{
            value:mimeType_,
            configurable: true
        });
            navigator.mimeTypes.temp++;
        }
        
    }
        
}
navigator.mimeTypes.length=navigator.mimeTypes.temp
delete navigator.mimeTypes.temp;



navigator.mimeTypes.__proto__=MimeTypeArray.prototype
navigator.mimeTypes=hellovm.proxy(navigator.mimeTypes);