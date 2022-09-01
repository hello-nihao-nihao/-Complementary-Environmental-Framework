var Location=function Location() {//构造函数
    throw new TypeError('Illegal constructor')
};hellovm.safefunction(Location);
Object.defineProperties(Location.prototype,{
    [Symbol.toStringTag]:{
        value:'Location',
        configurable:true
    }
});


//////////////////////////////////
//////////////////////////////////
location={}
location.__proto__=Location.prototype
location=hellovm.proxy(location)

