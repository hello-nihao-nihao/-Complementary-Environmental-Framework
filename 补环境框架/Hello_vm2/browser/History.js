var History=function History() {
    throw new TypeError('Illegal constructor')
};hellovm.safefunction(History)
Object.defineProperties(History.prototype,{
    [Symbol.toStringTag]:{
        value:'History',
        configurable:true
    }
});
/////////////////////////////////
/////////////////////////////////
history={};
history.__proto__=History.prototype;
history=hellovm.proxy(history);