//更改浏览器的某些参数，常用的
// hellovm.memory.Plugin.new({
//         description:'Portable Document Format',
//         filename:'internal-pdf-viewer',
//         name:'PDF Viewer',
//         MimeTypes:[
//                     {
//                         description: "Portable Document Format",
//                         suffixes:"pdf",
//                         type: "application/pdf"
//                     },
//                     {
//                         description: "Portable Document Format",
//                         suffixes:"pdf",
//                         type: "application/pdf"
//                     }
//                     ]
//     })
//在此文件下的代码,必须要在框架getcode 方法执行后执行。
hellovm.AddPlugin= function (data){
    if(hellovm.memory.PluginArray.temp==undefined){
        hellovm.memory.PluginArray.temp=[];
    } 
    hellovm.memory.PluginArray.temp.push(data) 
}