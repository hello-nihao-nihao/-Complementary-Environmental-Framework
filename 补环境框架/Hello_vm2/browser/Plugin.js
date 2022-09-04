hellovm.memory.Plugin={}
var Plugin=function Plugin() {
    throw new TypeError('Illegal constructor')
};hellovm.safefunction(Plugin);
hellovm.memory.Plugin.iterator= function values(){
    debugger;
    return {
        next:function (){
            if(this.index_== undefined){
                debugger;
                this.index=0
            }
            var temp=this.self_[this.index_]
            this.index_++;
            if (temp!=undefined){
            return {done:false,value:temp};
            }
            else{
                return {done:false,value:temp};
            }
                
        },
        self_:this
    }
};hellovm.safefunction(hellovm.memory.Plugin.iterator)
Object.defineProperties(Plugin.prototype,{
    [Symbol.toStringTag]:{
        value:'Plugin',
        configurable:true
    },
    [Symbol.iterator]:{
        value:hellovm.memory.Plugin.iterator,
        configurable:true
    }
})
////////////////////////////////////////////////////////
Plugin.prototype.description='';
Plugin.prototype.filename='';
Plugin.prototype.name='';
Plugin.prototype.length=0;

Plugin.prototype.item = function item(index){
    debugger;
    return this[index]
}; hellovm.safefunction(Plugin.prototype.item)
hellovm.rename(Plugin.prototype.item,'item')

Plugin.prototype.namedItem = function namedItem(key){
    debugger;
    return this[key]
}; hellovm.safefunction(Plugin.prototype.namedItem)
hellovm.rename(Plugin.prototype.namedItem,'namedItem')

Plugin.prototype.__defineGetter__('description',function(){
    try{
        return this.description;
    }
    catch{
        throw new TypeError('Illegal invocation');
    }
});
Plugin.prototype.__defineGetter__('filename',function(){
    try{
    return this.filename;
}
catch{
    throw new TypeError('Illegal invocation');
}});
Plugin.prototype.__defineGetter__('name',function(){
    try{
    return this.name;
}
catch{
    throw new TypeError('Illegal invocation');
}});
////////////////////////////////////////////////////////
//{description:'Portable Document Format',filename:'internal-pdf-viewer',name:'PDF Viewer',MimeType:[]}
hellovm.memory.Plugin.new = function(data){
    let plugin = {}

    if(data != undefined){
        plugin.description = data.description
        plugin.filename = data.filename
        plugin.name = data.name

        if(data.MimeTypes != undefined){
          for (let mtindex = 0; mtindex < data.MimeTypes.length; mtindex++) {
              var mimeTypedata = data.MimeTypes[mtindex];
              var mimeType = hellovm.memory.MimeType.new(mimeTypedata,plugin)
              plugin[mtindex] = mimeType
            //   plugin[mimeType.type] = mimeType
              Object.defineProperty(plugin,mimeType.type,{
                    value:mimeType,
                    configurable: true
              });
            
        }}
          plugin.length = data.MimeTypes.length
    }
    plugin.__proto__ = Plugin.prototype
    
    return plugin
}