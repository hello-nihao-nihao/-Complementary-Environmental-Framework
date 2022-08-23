window=this
var Window=function Window() {
    throw new TypeError('Illegal constructor')
};hellovm.safefunction(Window)
Object.defineProperties(Window.prototype,{
    [Symbol.toStringTag]:{
        value:'Window',
        configurable:true
    }
});
///////////////////////////////////
Window.prototype.PERSISTENT=1;
Window.prototype.TEMPORARY=0;
///////////////////////////////////
window.__proto__=Window.prototype
window.close=function close(){};hellovm.safefunction(window.close)

Window.prototype.__proto__=WindowProperties.prototype;

window=hellovm.proxy(window)
Window=hellovm.proxy(Window)
