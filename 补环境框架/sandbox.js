const {VM,VMScript} = require('vm2');
var fs=require('fs')
var hello_vm2=require('./Hello_vm2/hello_vm2.node.js')
var hello_vm2_code=hello_vm2.Getcode()
const codefile=`${__dirname}/code.js`;
const vm = new VM();
script=new VMScript(hello_vm2_code+fs.readFileSync(codefile),'Myscript')
debugger;
vm.run(script)
