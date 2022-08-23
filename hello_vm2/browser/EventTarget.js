var EventTarget=function EventTarget() {//构造函数

};hellovm.safefunction(EventTarget)
Object.defineProperties(EventTarget.prototype,{
    [Symbol.toStringTag]:{
        value:'EventTarget',
        configurable:true
    }
});
EventTarget.prototype.addEventListener=function addEventListener(){debugger;}
hellovm.safefunction(EventTarget.prototype.addEventListener)
EventTarget.prototype.dispatchEvent=function dispatchEvent(){debugger;}
hellovm.safefunction(EventTarget.prototype.dispatchEvent)
EventTarget.prototype.removeEventListener=function removeEventListener(){debugger;}
hellovm.safefunction(EventTarget.prototype.removeEventListener);
EventTarget=hellovm.proxy(EventTarget);