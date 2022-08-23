(() => {
    "use strict";
    const $toString =Function.toString;
    const myFunction_toString_symbol=Symbol('('.concat('',')_',(Math.random()+'').toString(36)));
    const myToString =function(){
        return typeof this == 'function' && this[myFunction_toString_symbol] || $toString.call(this);
    };
    function set_native(func,key,value){
        Object.defineProperty(func,key,{
            "enumerable":false,
            "configurable":true,
            "writable": true,
            "value":value
        })
    };
    delete Function.prototype['toString'];//删除原型链上的toString
    set_native(Function.prototype,"toString",myToString);
    set_native(Function.prototype.toString,myFunction_toString_symbol,"function toString() { [native code] }");//保护自定义的toString
    this.hellovm.safefunction = (func) =>{
        set_native(func,myFunction_toString_symbol,`function ${myFunction_toString_symbol,func.name || ''}() { [native code] }`);

    };//导出函数到globalThis
}).call(this)