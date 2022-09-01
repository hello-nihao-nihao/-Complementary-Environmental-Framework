//过掉Object.getOwnPropertySymbols检测
hellovm.getOwnPropertySymbols = Object.getOwnPropertySymbols;
Object.getOwnPropertySymbols = function getOwnPropertySymbols(obj) {
    let value = obj.toString();
    let result = /function.*toString.*native code/g.test(value)
    if (result) return [];
    else return hellovm.getOwnPropertySymbols(obj)
}
hellovm.safefunction(Object.getOwnPropertySymbols)
