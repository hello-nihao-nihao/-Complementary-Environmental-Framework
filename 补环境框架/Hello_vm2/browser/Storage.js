var Storage=function Storage() {
    throw new TypeError('Illegal constructor')
};hellovm.safefunction(Storage);
hellovm.rename(Storage.prototype,'Storage')


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Storage.prototype.length=8;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Storage.prototype.clear=function clear(){
    debugger;
    var temp=Object.keys(this)
    for (var i=0; temp.length>i;i++)
    {
        delete this[temp[i]];
    }
}; hellovm.safefunction(Storage.prototype.clear);
hellovm.rename(Storage.prototype.clear, 'clear');
// Storage.prototype.clear = Storage.prototype.clear.bind(null);
// Reflect.deleteProperty(Storage.prototype.clear, 'name');
// Object.defineProperty(Storage.prototype.clear,'name',{value: `clear`,writable:false,enumerable:false,configurable:true});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Storage.prototype.getItem=function getItem(k){
    debugger;
    return this[k];
}; hellovm.safefunction(Storage.prototype.getItem);
hellovm.rename(Storage.prototype.getItem, 'getItem');
// Storage.prototype.getItem = Storage.prototype.getItem.bind(null);
// Reflect.deleteProperty(Storage.prototype.getItem, 'name');
// Object.defineProperty(Storage.prototype.getItem,'name',{value: `getItem`,writable:false,enumerable:false,configurable:true});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Storage.prototype.key=function key(index){
    debugger;
    return Object.keys(this)[index]
}; hellovm.safefunction(Storage.prototype.key);
hellovm.rename(Storage.prototype.key, 'key');
// Storage.prototype.key = Storage.prototype.key.bind(null);
// Reflect.deleteProperty(Storage.prototype.key, 'name');
// Object.defineProperty(Storage.prototype.key,'name',{value: `key`,writable:false,enumerable:false,configurable:true});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Storage.prototype.removeItem=function removeItem(k){
    debugger;
    delete this[k]
}; hellovm.safefunction(Storage.prototype.removeItem);
hellovm.rename(Storage.prototype.removeItem, 'removeItem');
// Storage.prototype.removeItem = Storage.prototype.removeItem.bind(null);
// Reflect.deleteProperty(Storage.prototype.removeItem, 'name');
// Object.defineProperty(Storage.prototype.removeItem,'name',{value: `removeItem`,writable:false,enumerable:false,configurable:true});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Storage.prototype.setItem=function setItem(k,v){
    debugger;
    this[k]=v;
}; hellovm.safefunction(Storage.prototype.setItem);
hellovm.rename(Storage.prototype.setItem, 'setItem');
// Storage.prototype.setItem = Storage.prototype.setItem.bind(null);
// Reflect.deleteProperty(Storage.prototype.setItem, 'name');
// Object.defineProperty(Storage.prototype.setItem,'name',{value: `setItem`,writable:false,enumerable:false,configurable:true});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
hellovm.memory.get_storage_length=function length(){
    return Object.keys(this).length;
};hellovm.safefunction(hellovm.memory.get_storage_length);
hellovm.rename(hellovm.memory.get_storage_length,'length');
Storage.prototype.__defineGetter__('length',hellovm.memory.get_storage_length);



localStorage={}
localStorage.__proto__=Storage.prototype
localStorage=hellovm.proxy(localStorage)

sessionStorage={}
sessionStorage.__proto__=Storage.prototype
sessionStorage=hellovm.proxy(sessionStorage)
