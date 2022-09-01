var HTMLDivElement=function NaviHTMLDivElementgator() {
    throw new TypeError('Illegal constructor')
};hellovm.safefunction(HTMLDivElement)
Object.defineProperties(HTMLDivElement.prototype,{
    [Symbol.toStringTag]:{
        value:'HTMLDivElement',
        configurable:true
    }
});

//真实的div
hellovm.memory.htmlelements["div"]=function(){
    var div= new (function (){});
    //////////////////////////////
    div.align="";

    //////////////////////////////
    div.__proto__=HTMLDivElement.prototype;
    return div
};  