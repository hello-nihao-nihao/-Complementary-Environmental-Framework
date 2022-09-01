var EventTarget=function EventTarget() {//构造函数
    
};hellovm.safefunction(EventTarget);hellovm.rename(EventTarget.prototype,'EventTarget')
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
EventTarget.prototype.addEventListener=function addEventListener(type,callback)
{
    debugger;
    if(!(type in hellovm.memory.listeners)){
        hellovm.memory.listeners[type]=[];
    }
    hellovm.memory.listeners[type].push(callback);

};
hellovm.safefunction(EventTarget.prototype.addEventListener);

hellovm.rename(EventTarget.prototype.addEventListener,'addEventListener');

EventTarget.prototype.addEventListener = EventTarget.prototype.addEventListener.bind(null);

Reflect.deleteProperty(EventTarget.prototype.addEventListener, 'name');

Object.defineProperty(EventTarget.prototype.addEventListener,'name',{value: `addEventListener`,writable:false,enumerable:false,configurable:true});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
EventTarget.prototype.dispatchEvent=function dispatchEvent(){debugger;};
hellovm.safefunction(EventTarget.prototype.dispatchEvent);

EventTarget.prototype.removeEventListener=function removeEventListener(){debugger;};

hellovm.safefunction(EventTarget.prototype.removeEventListener);

