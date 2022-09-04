
var PluginArray=function PluginArray() {
    throw new TypeError('Illegal constructor')
};hellovm.safefunction(PluginArray);

hellovm.memory.PluginArray.iterator= function values(){
    debugger;
};hellovm.safefunction(hellovm.memory.PluginArray.iterator)

Object.defineProperties(PluginArray.prototype,{
    [Symbol.toStringTag]:{
        value:'PluginArray',
        configurable:true
    },
    [Symbol.iterator]:{
        value:hellovm.memory.PluginArray.iterator,
        configurable:true
    }
})
//////////////////////////////////////////////////////////////////////////////////////
PluginArray.prototype.item=function item(index){
    debugger;
    return this[index]
};hellovm.safefunction(PluginArray.prototype.item);
hellovm.rename(PluginArray.prototype.item,'item')
PluginArray.prototype.namedItem=function namedItem(key){
    debugger;
    return this[key]
};hellovm.safefunction(PluginArray.prototype.namedItem)
hellovm.rename(PluginArray.prototype.namedItem,'namedItem')
PluginArray.prototype.refresh=function refresh(){
    debugger;
};hellovm.safefunction(PluginArray.prototype.refresh)
hellovm.rename(PluginArray.prototype.refresh,'refresh')
Plugin.prototype.__defineGetter__('length',function(){
    try{
        return this.length;
    }
    catch{
        throw new TypeError('Illegal invocation');
    }
});


//////////////////////////////////////////////////////////////////////////////////////
hellovm.memory.PluginArray._={}

if(hellovm.memory.PluginArray.temp!=undefined){
    for (let index=0;index<hellovm.memory.PluginArray.temp.length;index++){
        var plugintemp=hellovm.memory.Plugin.new(hellovm.memory.PluginArray.temp[index]);
        hellovm.memory.PluginArray._[index]=plugintemp;
        Object.defineProperty(hellovm.memory.PluginArray._,plugintemp.name,{
            value:plugintemp,
            configurable: true
      });
      hellovm.memory.PluginArray._.length=hellovm.memory.PluginArray.temp.length;
    }
}
hellovm.memory.PluginArray._.__proto__=PluginArray.prototype
navigator.plugins=hellovm.memory.PluginArray._
//依赖注入
hellovm.memory.PluginArray._=hellovm.proxy(hellovm.memory.PluginArray._)