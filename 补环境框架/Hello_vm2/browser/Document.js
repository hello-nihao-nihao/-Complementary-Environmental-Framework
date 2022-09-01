var Document=function Document() {//构造函数

};hellovm.safefunction(Document);hellovm.rename(Document.prototype,"Document")

HTMLDocument.prototype.__proto__=Document.prototype
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Document.prototype.getElementById=function getElementById(id){
    debugger;
    return null;
};hellovm.safefunction(Document.prototype.getElementById);hellovm.rename(Document.prototype.getElementById,"getElementById");
Document.prototype.getElementById = Document.prototype.getElementById.bind(null);
Reflect.deleteProperty(Document.prototype.getElementById, 'name');
Object.defineProperty(Document.prototype.getElementById,'name',{value: `getElementById`,writable:false,enumerable:false,configurable:true});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Document.prototype.createElement=function createElement(tagName){
    var tagname = tagName.toLowerCase()+"";
    if (hellovm.memory.htmlelements[tagName]==undefined){
        debugger;
    };
    return hellovm.proxy(hellovm.memory.htmlelements[tagName]());
};hellovm.safefunction(Document.prototype.createElement);hellovm.rename(Document.prototype.createElement,"createElement");
Document.prototype.createElement = Document.prototype.createElement.bind(null);
Reflect.deleteProperty(Document.prototype.createElement, 'name');
Object.defineProperty(Document.prototype.createElement,'name',{value: `createElement`,writable:false,enumerable:false,configurable:true});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.defineProperty(Document.prototype, "title", {
    value: '第六十题---url加密',
    writable: undefined,
    enumerable: true,
    configurable: true
});

for(var prototype_ in Document.prototype){
    document[prototype_]=Document.prototype[prototype_];
    Document.prototype.__defineGetter__(prototype_,function (){
    throw new TypeError('Illegal invocation')
    });
};