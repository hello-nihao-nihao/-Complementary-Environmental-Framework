var HTMLDocument=function HTMLDocument() {//构造函数
    throw new TypeError('Illegal constructor')
};hellovm.safefunction(HTMLDocument);
Object.defineProperties(HTMLDocument.prototype,{
    [Symbol.toStringTag]:{
        value:'HTMLDocument',
        configurable:true
    }
});
document={}
document.__proto__=HTMLDocument.prototype
//////////////////////////////////
// Object.defineProperty(HTMLDocument.prototype, "title", {
//     value: '新标签页',
//     writable: undefined,
//     enumerable: true,
//     configurable: true
// });
//////////////////////////////////

for(var prototype_ in HTMLDocument.prototype){
    document[prototype_]=HTMLDocument.prototype[prototype_];
    HTMLDocument.prototype.__defineGetter__(prototype_,function (){
    throw new TypeError('Illegal invocation')
    });
};
document=hellovm.proxy(document);
