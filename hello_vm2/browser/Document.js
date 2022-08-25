var Document=function Document() {//构造函数

};hellovm.safefunction(Document);
Object.defineProperties(Document.prototype,{
    [Symbol.toStringTag]:{
        value:'Document',
        configurable:true
    }
});
document={};
document.__proto__=Document.prototype
/////////////////////////////////////
Document.prototype.getElementById=function getElementById(id){
    debugger;
    return null;
};hellovm.safefunction(Document.prototype.getElementById);

Document.prototype.createElement=function createElement(tagName){
    var tagname = tagName.toLowerCase()+"";
    if (hellovm.memory.htmlelements[tagName]==undefined){
        debugger;
    };
    return hellovm.proxy(hellovm.memory.htmlelements[tagName]());
};hellovm.safefunction(Document.prototype.createElement);


/////////////////////////////////////
document=hellovm.proxy(document);