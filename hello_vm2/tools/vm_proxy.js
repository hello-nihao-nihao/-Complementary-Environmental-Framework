hellovm.proxy=function (o) {
    if (hellovm.memory.config.proxy==false){return o};
    return  new Proxy(o,{
      set(target,property,receiver)
      {
      console.log('set',target,property,receiver)
      return Reflect.set(...arguments);
      },
      get(target,property,receiver)
      {
      console.log('get',target,property,target[property])
      return target[property]
      }
  });
}