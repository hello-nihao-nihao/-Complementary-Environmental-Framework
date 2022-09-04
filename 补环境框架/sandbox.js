const {VM,VMScript} = require('vm2');
var fs=require('fs')
var hello_vm2=require('./Hello_vm2/hello_vm2.node.js')
var hello_vm2_code=hello_vm2.Getcode({
    proxy:false
},
`
hellovm.AddPlugin({description:'Portable Document Format',filename:'internal-pdf-viewer',name:'PDF Viewer',MimeTypes:[{description: 'Portable Document Format',suffixes:'pdf',type: 'application/pdf'},{description: 'Portable Document Format',suffixes:'pdf',type: 'application/pdf'}]})
hellovm.AddPlugin({description:'Portable Document Format',filename:'internal-pdf-viewer',name:'PDF Viewer',MimeTypes:[{description: 'Portable Document Format',suffixes:'pdf',type: 'application/pdf'},{description: 'Portable Document Format',suffixes:'pdf1',type: 'application/pdf1'}]})

`
)
const codefile=`${__dirname}/code.js`;
const vm = new VM();
script=new VMScript(hello_vm2_code+fs.readFileSync(codefile),'Myscript')
debugger;
vm.run(script)
