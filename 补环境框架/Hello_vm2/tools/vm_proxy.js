hellovm.proxy=function (o) {
    if (hellovm.memory.config.proxy==false){return o};
    return  new Proxy(o,{
      set(target,property,value)
      {
      console.log({"方式":"set","调用者":target,"类型":property,"值":value})
      return Reflect.set(...arguments);
      },
      get(target,property,receiver)
      {
      console.log({"方式":"get","调用者":target,"类型":property,"值":target[property]})
      
      return target[property]
      }
  });
};